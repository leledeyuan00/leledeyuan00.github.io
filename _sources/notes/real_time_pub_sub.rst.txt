.. _Realtime Pub Sub:

ROS2 realtime pub and sub
================================

.. code:: c++

    controller_interface::CallbackReturn XXX::on_configure(
        const rclcpp_lifecycle::State & /*previous_state*/)
    {
        /* Some other configuration */
        // setup subscribers and publishers
        auto joint_command_callback =
            [this](const std::shared_ptr<trajectory_msgs::msg::JointTrajectoryPoint> msg)
        { input_joint_command_.writeFromNonRT(msg); };
        input_joint_command_subscriber_ =
            get_node()->create_subscription<trajectory_msgs::msg::JointTrajectoryPoint>(
            "~/joint_references", rclcpp::SystemDefaultsQoS(), joint_command_callback);
        s_publisher_ = get_node()->create_publisher<control_msgs::msg::XXXmsg>(
            "~/status", rclcpp::SystemDefaultsQoS());
        state_publisher_ =
            std::make_unique<realtime_tools::RealtimePublisher<ControllerStateMsg>>(s_publisher_);
    }

    controller_interface::return_type XXX::update_reference_from_subscribers()
    {
        // update input reference from ros subscriber message
        if (!admittance_)
        {
            return controller_interface::return_type::ERROR;
        }

        joint_command_msg_ = *input_joint_command_.readFromRT();

        // if message exists, load values into references
        if (joint_command_msg_.get())
        {
            for (size_t i = 0; i < joint_command_msg_->positions.size(); ++i)
            {
            position_reference_[i].get() = joint_command_msg_->positions[i];
            }
            for (size_t i = 0; i < joint_command_msg_->velocities.size(); ++i)
            {
            velocity_reference_[i].get() = joint_command_msg_->velocities[i];
            }
        }

        return controller_interface::return_type::OK;
    }

    controller_interface::return_type XXX::update_and_write_commands(
        const rclcpp::Time & /*time*/, const rclcpp::Duration & period)
    {
        // Realtime constraints are required in this function
        if (!admittance_)
        {
            return controller_interface::return_type::ERROR;
        }

        // update input reference from chainable interfaces
        read_state_reference_interfaces(reference_);

        // get all controller inputs
        read_state_from_hardware(joint_state_, ft_values_);

        // apply admittance control to reference to determine desired state
        admittance_->update(joint_state_, ft_values_, reference_, period, reference_admittance_);

        // write calculated values to joint interfaces
        write_state_to_hardware(reference_admittance_);

        // Publish controller state
        state_publisher_->lock();
        state_publisher_->msg_ = admittance_->get_controller_state();
        state_publisher_->unlockAndPublish();

        return controller_interface::return_type::OK;
    }
