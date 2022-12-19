Rotation Error Computing
========================

Referenced by `Stefan's Cartesian Controller <https://github.com/fzi-forschungszentrum-informatik/cartesian_controllers/blob/ros2/cartesian_motion_controller/src/cartesian_motion_controller.cpp#L152>`_

There is a good way to compute the rotation error, that I never knew before.

The rotation error is computed by the following formula:

1. He uses the quertonion to generate a rotation matrix, and then multiply the target rotation matrix with the inverse of current rotation matrix to compute the error matrix.

.. math:: 

    \mathbf{R}_{error} = \mathbf{R}_{target} * \mathbf{R}_{current}^{-1}

2. Then the Rodrigues formula is used to compute the rotation error as a vector from the error matrix.

The code is as follows:

.. code-block:: c++

    Eigen::Matrix3d R_error = R_target * R_current.inverse();
    Eigen::AngleAxisd error(R_error);
    Eigen::Vector3d error_angle = error.axis() * error.angle();
    // This error_angle can be directly used in the Jacobian Matrix

.. note:: 

    The Rodrigues formula is as follows:

    .. math:: 

        \mathbf{R} = \mathbf{I} + \sin(\theta) \mathbf{K} + (1 - \cos(\theta)) \mathbf{K}^2

    where :math:`\mathbf{K}` is the skew-symmetric matrix of the rotation axis, and :math:`\theta` is the rotation angle.