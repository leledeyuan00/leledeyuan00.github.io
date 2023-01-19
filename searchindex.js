Search.setIndex({"docnames": ["2022_12/ATI_sensor", "2022_12/Trajectory_controller", "2022_12/index", "2023_01/Vision", "2023_01/index", "index", "notes/index", "notes/kinematics_interface", "notes/real_time_pub_sub", "notes/robot_description", "notes/rotation_error"], "filenames": ["2022_12/ATI_sensor.rst", "2022_12/Trajectory_controller.rst", "2022_12/index.rst", "2023_01/Vision.rst", "2023_01/index.rst", "index.rst", "notes/index.rst", "notes/kinematics_interface.rst", "notes/real_time_pub_sub.rst", "notes/robot_description.rst", "notes/rotation_error.rst"], "titles": ["ATI Sensor development", "Denso Robot Trajectory Controller Development", "Logs in 2022-12", "Robot Vision for Garment Manipulation", "Logs in 2023-01", "Dayuan Research Logs!", "Some notes", "Kinematics", "ROS2 realtime pub and sub", "How to get the robot_description parameter well?", "Rotation Error Computing"], "terms": {"It": [0, 1, 7], "": [0, 1, 6, 10], "wire": 0, "when": [0, 1], "i": [0, 1, 3, 7, 8, 9, 10], "first": [0, 2, 3, 7], "run": [0, 1], "soem": 0, "root": 0, "user": [0, 1], "can": [0, 1, 3, 7, 9, 10], "observ": 0, "topic": 0, "narmal": 0, "termin": 0, "just": [0, 1], "cannot": [0, 1, 9], "read": 0, "data": [0, 7], "thi": [0, 1, 3, 7, 8, 9, 10], "And": [0, 1, 3], "tri": 0, "set": [0, 1], "environ": [0, 1], "export": 0, "fastrtps_default_profiles_fil": 0, "xxx": [0, 8], "work": [0, 1], "BUT": 0, "try": [0, 1, 9], "agian": 0, "sever": 0, "hour": 0, "later": 0, "doesn": 0, "t": [0, 1, 7], "scenc": 0, "so": [0, 1, 9], "even": 0, "see": 0, "node": [0, 1, 9], "ani": 0, "how": [0, 1, 5, 6], "mayb": [0, 1], "reset": [0, 9], "udp": 0, "transmiss": 0, "rest": 0, "don": [0, 1], "know": 0, "why": [0, 1], "config": [0, 1], "xml": [0, 1], "file": [0, 1], "lead": 0, "sudo": 0, "ros2": [0, 2, 5, 6, 9], "anymor": 0, "us": [0, 1, 3, 7, 9, 10], "ethercat": 0, "packag": [0, 1, 7], "There": [0, 1, 10], "ar": [0, 1, 8], "3": 0, "problem": [0, 2], "need": [0, 1], "The": [0, 2, 3, 7, 10], "whatev": 0, "foxi": 0, "humbl": 0, "both": [0, 1], "all": [0, 1, 8], "them": 0, "base": [0, 1, 3], "newest": 0, "kernel": 0, "But": [0, 9], "igh": 0, "veri": [0, 7], "old": 0, "build": 0, "myself": [0, 1], "find": [0, 1], "suitabl": [0, 1], "map": 0, "network": 0, "between": 0, "host": 0, "commun": 0, "must": 0, "absolut": 0, "isol": 0, "issu": 0, "said": 0, "some": [0, 1, 5, 8], "gui": 0, "contain": 0, "also": [0, 1, 3], "detect": [0, 1], "code": [0, 7, 10], "net": [0, 7], "ipc": 0, "pid": 0, "rm": 0, "osrf": 0, "ro": [0, 1, 8], "desktop": 0, "demo_nodes_cpp": 0, "talker": 0, "should": [0, 1, 7], "reinstal": 0, "out": 0, "my": 0, "knowledg": 0, "area": 0, "instal": 0, "you": 0, "docker0": 0, "interfac": [0, 1, 6, 8], "becaus": [0, 1, 9], "depend": [0, 1], "virtual": [0, 2], "machin": 0, "Not": 0, "linux": 0, "bug": 0, "engin": 0, "instead": 0, "done": [0, 1, 3], "red": 0, "blink": 0, "add": [0, 1], "model": 0, "xcaro": 0, "wrapper": 0, "hardwar": [0, 7], "ros2_control": 0, "decid": 1, "solv": [1, 2], "invers": [1, 7, 10], "kinemat": [1, 5, 6], "probelm": 1, "By": 1, "stefanscherzing": 1, "paramet": [1, 5, 6], "well": [1, 5, 6], "Such": 1, "robot_descript": [1, 5, 6], "other": [1, 3, 8], "For": 1, "client": 1, "rescript": 1, "uncontrol": 1, "If": 1, "here": 1, "load": [1, 8], "directli": [1, 7, 10], "spawn": 1, "which": 1, "usual": 1, "combin": 1, "urdf": [1, 9], "found": [1, 9], "doe": 1, "correctli": 1, "cartesian": [1, 7, 10], "motion": [1, 7], "an": 1, "offici": 1, "fammiliar": 1, "Then": [1, 7, 10], "write": [1, 8], "function": [1, 7, 8], "seem": 1, "interest": 1, "declar": 1, "subscrib": [1, 8], "updat": [1, 7, 8], "variabl": 1, "ganrantte": 1, "performac": 1, "gener": [1, 9, 10], "certain": 1, "loop": 1, "rate": 1, "send": 1, "frequenc": 1, "pub": [1, 5, 6], "sub": [1, 5, 6], "c": [1, 7], "do": [1, 3], "current": [1, 7, 10], "In": [1, 7], "stefan": [1, 6, 10], "imped": 1, "system": 1, "good": [1, 10], "wai": [1, 10], "servic": 1, "better": 1, "moveit2": [1, 6], "servo": [1, 6], "think": 1, "chanc": 1, "learn": 1, "veloc": [1, 7, 8], "limitaion": 1, "joint": [1, 6, 8], "anoth": 1, "flexibl": 1, "No": 1, "collis": 1, "wrote": 1, "import": 1, "ensur": 1, "what": 1, "basic": 1, "canb": 1, "select": 1, "anytim": 1, "ad": 1, "design": 1, "its": 1, "finnal": 1, "trajectory_control": 1, "real": 1, "safe": 1, "larg": 1, "workspac": 1, "go": 1, "home": 1, "state": [1, 8], "professor": 1, "ask": 1, "question": 1, "todai": 1, "2022": [1, 5], "19": 1, "too": 1, "high": 1, "answer": 1, "kind": 1, "feedback": 1, "posit": [1, 7, 8], "chang": 1, "make": [1, 7], "forc": [1, 7], "iner": 1, "execut": 1, "itself": 1, "alreadi": 1, "consid": 1, "u": [1, 7], "from": [1, 7, 8, 9, 10], "progress": 1, "get": [1, 5, 6, 8], "h": [1, 7], "matrix": [1, 6, 10], "gazebo": 1, "referenc": [1, 7, 10], "ur": 1, "moveit": [1, 3], "main": 1, "header": 1, "stamp": 1, "time": [1, 7, 8], "publish": [1, 8], "cli": 1, "dosen": 1, "refer": [1, 7, 8], "compliant": 1, "pose": 1, "track": 1, "funciton": 1, "\u82f1\u8bed\u5199\u7684\u8fd8\u662f\u592a\u9ebb\u70e6\u4e86": 1, "\u4ee5\u540e\u8fd8\u662f\u4e2d\u6587\u5199\u597d\u4e86": 1, "\u4e0d\u8fc7\u8fd8\u662f\u8981\u591a\u5199\u5199\u82f1\u8bed": 1, "\u4e0d\u7136\u4f1a\u5fd8\u7684\u592a\u5feb\u4e86": 1, "\u5367\u69fd": 1, "\u8fd9\u4e00\u53e5\u662fai\u7ed9\u6211\u5199\u51fa\u6765\u7684": 1, "\u6211\u8c22\u8c22\u5b83\u4e86": 1, "\u597d\u5427": 1, "\u65e2\u7136ai\u7ed9\u6211\u5199\u4e86": 1, "\u90a3\u6211\u8fd8\u662f\u7ee7\u7eed\u7ec3\u7ec3\u82f1\u8bed\u597d\u4e86": 1, "\u867d\u7136\u4e00\u5806\u8bed\u6cd5\u9519\u8bef": 1, "\u54c8\u54c8": 1, "ati": [2, 5], "sensor": [2, 5], "develop": [2, 5], "docker": 2, "next": [2, 7], "todo": 2, "denso": [2, 5], "robot": [2, 4, 5, 7, 9], "trajectori": [2, 5], "control": [2, 5, 6, 8, 10], "forward": [2, 7], "dynam": 2, "second": [2, 7], "16": 2, "admitt": [2, 8], "realtim": [2, 5, 6], "command": 2, "custom": 2, "ik": 2, "solver": [2, 6], "thing": 3, "camera": 3, "frame": 3, "two": 3, "each": [3, 9], "plugin": [3, 6], "vision": [4, 5], "garment": [4, 5], "manipul": [4, 5], "calibr": 4, "12": 5, "2023": 5, "01": 5, "rotat": [5, 6], "error": [5, 6, 8, 9], "comput": [5, 6, 7], "kdl": 6, "mass": 6, "method": 6, "realiz": 6, "singular": 6, "handl": 6, "provid": 7, "librari": 7, "space": 7, "calcul": [7, 8], "damp": 7, "least": 7, "squar": 7, "dl": 7, "avoid": 7, "equat": 7, "q": 7, "j": 7, "lambda": 7, "2": [7, 10], "1": [7, 10], "x_": 7, "desir": [7, 8], "where": [7, 10], "jacobian": [7, 10], "factor": 7, "ident": 7, "x": 7, "orient": 7, "end": 7, "effector": 7, "github": 7, "ha": 7, "jnttomass": 7, "const": [7, 8], "jntarrai": 7, "jntspaceinertiamatrix": 7, "follow": [7, 10], "sum_": 7, "n": 7, "m_i": 7, "j_i": 7, "j_j": 7, "m_j": 7, "link": 7, "child": 7, "euqtion": 7, "ddot": 7, "f": 7, "trajectory_msg": [7, 8], "msg": [7, 8], "jointtrajectorypoint": [7, 8], "forwarddynamicssolv": 7, "getjointcontrolcmd": 7, "rclcpp": [7, 8, 9], "durat": [7, 8], "period": [7, 8], "ctrl": 7, "vector6d": 7, "net_forc": 7, "inertia": 7, "actual": 7, "buildgenericmodel": 7, "m_jnt_space_inertia_solv": 7, "m_current_posit": 7, "m_jnt_space_inertia": 7, "m_jnt_jacobian_solv": 7, "jnttojac": 7, "m_jnt_jacobian": 7, "acceler": 7, "accord": 7, "m_current_acceler": 7, "transpos": 7, "numer": 7, "integr": 7, "euler": 7, "m_last_posit": 7, "m_last_veloc": 7, "m_current_veloc": 7, "0": [7, 8], "9": 7, "10": 7, "global": [7, 9], "against": 7, "unwant": 7, "null": 7, "Will": 7, "caus": 7, "exponenti": 7, "slow": 7, "down": 7, "without": 7, "input": [7, 8], "sure": 7, "stai": 7, "allow": 7, "margin": 7, "applyjointlimit": 7, "appli": [7, 8], "result": 7, "control_cmd": 7, "int": 7, "m_number_joint": 7, "push_back": 7, "left": 7, "empti": [7, 9], "those": 7, "valu": [7, 8], "interpret": 7, "most": 7, "driver": 7, "max": 7, "toler": 7, "As": 7, "consequ": 7, "move": 7, "slowli": 7, "time_from_start": 7, "valid": 7, "cycl": 7, "return": [7, 8, 9], "svd": 7, "last": 7, "column": 7, "point": 7, "toward": 7, "awai": 7, "singualr": 7, "controller_interfac": 8, "callbackreturn": [8, 9], "on_configur": 8, "rclcpp_lifecycl": [8, 9], "previous_st": 8, "configur": 8, "setup": 8, "auto": [8, 9], "joint_command_callback": 8, "std": [8, 9], "shared_ptr": 8, "input_joint_command_": 8, "writefromnonrt": 8, "input_joint_command_subscriber_": 8, "get_nod": [8, 9], "create_subscript": 8, "joint_refer": 8, "systemdefaultsqo": 8, "s_publisher_": 8, "create_publish": 8, "control_msg": 8, "xxxmsg": 8, "statu": 8, "state_publisher_": 8, "make_uniqu": 8, "realtime_tool": 8, "realtimepublish": 8, "controllerstatemsg": 8, "return_typ": 8, "update_reference_from_subscrib": 8, "messag": 8, "admittance_": 8, "joint_command_msg_": 8, "readfromrt": 8, "exist": 8, "size_t": 8, "size": 8, "position_reference_": 8, "velocity_reference_": 8, "ok": 8, "update_and_write_command": 8, "constraint": 8, "requir": 8, "chainabl": 8, "read_state_reference_interfac": 8, "reference_": 8, "read_state_from_hardwar": 8, "joint_state_": 8, "ft_values_": 8, "determin": 8, "reference_admittance_": 8, "write_state_to_hardwar": 8, "lock": 8, "msg_": 8, "get_controller_st": 8, "unlockandpublish": 8, "share": 9, "would": 9, "robot_state_publish": 9, "we": 9, "paremet": 9, "namespac": 9, "chrono_liter": 9, "string": 9, "m_robot_descript": 9, "get_paramet": 9, "as_str": 9, "syncparameterscli": 9, "sharedptr": 9, "urdf_param_cli": 9, "parameter_nod": 9, "new": 9, "make_shar": 9, "rclcpp_info": 9, "get_logg": 9, "wait": 9, "server": 9, "bool": 9, "success": 9, "wait_for_servic": 9, "5": 9, "rclcpp_error": 9, "node_interfac": 9, "lifecyclenodeinterfac": 9, "param": 9, "value_to_str": 9, "never": 10, "knew": 10, "befor": 10, "formula": 10, "he": 10, "quertonion": 10, "multipli": 10, "target": 10, "mathbf": 10, "r": 10, "_": 10, "rodrigu": 10, "vector": 10, "eigen": 10, "matrix3d": 10, "r_error": 10, "r_target": 10, "r_current": 10, "angleaxisd": 10, "vector3d": 10, "error_angl": 10, "axi": 10, "angl": 10, "sin": 10, "theta": 10, "k": 10, "co": 10, "skew": 10, "symmetr": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ati": 0, "sensor": 0, "develop": [0, 1], "docker": 0, "solv": 0, "next": 0, "todo": [0, 1], "denso": 1, "robot": [1, 3], "trajectori": 1, "control": [1, 7], "virtual": 1, "forward": 1, "dynam": 1, "first": 1, "problem": 1, "second": 1, "12": [1, 2], "16": 1, "admitt": 1, "ros2": [1, 7, 8], "realtim": [1, 8], "command": 1, "custom": 1, "ik": 1, "solver": [1, 7], "The": 1, "log": [2, 4, 5], "2022": 2, "vision": 3, "garment": 3, "manipul": 3, "calibr": 3, "2023": 4, "01": 4, "dayuan": 5, "research": 5, "note": [5, 6], "some": 6, "kinemat": 7, "interfac": 7, "plugin": 7, "kdl": 7, "joint": 7, "mass": 7, "matrix": 7, "stefan": 7, "": 7, "method": 7, "realiz": 7, "singular": 7, "handl": 7, "moveit2": 7, "servo": 7, "pub": 8, "sub": 8, "how": 9, "get": 9, "robot_descript": 9, "paramet": 9, "well": 9, "rotat": 10, "error": 10, "comput": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"ATI Sensor development": [[0, "ati-sensor-development"]], "Docker": [[0, "docker"]], "Solved!": [[0, "solved"]], "Next TODO": [[0, "next-todo"]], "Denso Robot Trajectory Controller Development": [[1, "denso-robot-trajectory-controller-development"]], "Virtual Forward Dynamics": [[1, "virtual-forward-dynamics"]], "First Problem": [[1, "first-problem"]], "Second Problem": [[1, "second-problem"]], "12-16": [[1, "id1"]], "Admittance Controller in ROS2 controllers": [[1, "admittance-controller-in-ros2-controllers"]], "Realtime command": [[1, "realtime-command"]], "Custom Controller": [[1, "custom-controller"]], "Custom IK Solver": [[1, "custom-ik-solver"]], "The problem of the IK solver": [[1, "the-problem-of-the-ik-solver"]], "TODO:": [[1, "todo"]], "Logs in 2022-12": [[2, "logs-in-2022-12"]], "Robot Vision for Garment Manipulation": [[3, "robot-vision-for-garment-manipulation"]], "Calibration": [[3, "calibration"]], "Logs in 2023-01": [[4, "logs-in-2023-01"]], "Dayuan Research Logs!": [[5, "dayuan-research-logs"]], "LOGs": [[5, "logs"]], "Notes": [[5, "notes"]], "Some notes": [[6, "some-notes"]], "Kinematics": [[7, "kinematics"]], "Kinematics Interface \u2013 ROS2 controller plugin": [[7, "kinematics-interface-ros2-controller-plugin"]], "KDL Kinematics Solver": [[7, "kdl-kinematics-solver"]], "Joint Mass Matrix": [[7, "joint-mass-matrix"]], "Stefan\u2019s method realized by KDL": [[7, "stefan-s-method-realized-by-kdl"]], "Singularity Handle in Moveit2 Servoing": [[7, "singularity-handle-in-moveit2-servoing"]], "ROS2 realtime pub and sub": [[8, "ros2-realtime-pub-and-sub"]], "How to get the robot_description parameter well?": [[9, "how-to-get-the-robot-description-parameter-well"]], "Rotation Error Computing": [[10, "rotation-error-computing"]]}, "indexentries": {}})