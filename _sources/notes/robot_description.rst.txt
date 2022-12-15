.. _Robot Rescription Parameter:

How to get the robot_description parameter well?
================================================


Because in the ROS2, the parameters cannot share with each Node in generally.

But in generally, there would be used in the /robot_state_publisher node.

So we can try to get that paremeter from this Node. 

.. code-block:: c++
    
    using namespace std::chrono_literals;

    std::string m_robot_description = get_node()->get_parameter("robot_description").as_string();
    rclcpp::SyncParametersClient::SharedPtr urdf_param_client;
    rclcpp::Node::SharedPtr parameter_node;
    parameter_node.reset(new rclcpp::Node("parameter_node"));
    urdf_param_client = std::make_shared<rclcpp::SyncParametersClient>(parameter_node, "/robot_state_publisher");
    RCLCPP_INFO(get_node()->get_logger(), "Waiting for global parameter server...");
    bool success = urdf_param_client->wait_for_service(5s);
    if (!success) {
        RCLCPP_ERROR(get_node()->get_logger(), "Global parameter server not found");
        return rclcpp_lifecycle::node_interfaces::LifecycleNodeInterface::CallbackReturn::ERROR;
    }
    auto parameters = urdf_param_client->get_parameters({"robot_description"});
    for (auto & param : parameters) {
        m_robot_description = param.value_to_string();
    }
    if (m_robot_description.empty())
    {
        RCLCPP_ERROR(get_node()->get_logger(), "robot_description is empty");
        return rclcpp_lifecycle::node_interfaces::LifecycleNodeInterface::CallbackReturn::ERROR;
    }
    RCLCPP_INFO(get_node()->get_logger(), "Robot URDF Found!");

