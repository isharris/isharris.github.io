CAMS bullet
- Improved multi-object radar tracking algorithm by implementing dedicated vehicle bounding box estimation in C++. Resulted in 50% reduction of false positive collision alerts. Achieved using Inverse Wishart matrix to estimate tracked vehicle shape from radar clutter.

# Torc Robotics Resume Section

1 sent. concise summary
Combining classical controls and modern ML tools to improve truck model fidelity for various simulation usecases (including RL training for learned vehicle planner). Python (scipy, numpy, pytorch) for model development and C/C++ for implementation.

then 2-3 bullets of technical specifics
- performed system identification on truck sensor data to learn more accurate dynamics models, used both time and frequency
domain least squares regression methods including the use of nonlinear gaussian regressors
- trained deep neural network model for transmission gear shifting, achieving 98% gear prediction accuracy on validation dataset
- improved developer experience on multiple teams by introducing Docker devcontainers and Github Actions CICD to various repos, including a critical Neural Rendering repo which previously required 10+ steps to (italics)maybe get working.  
