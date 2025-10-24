import React from 'react';

const AdminTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Admin User Management</h2>
        <p>
          Learn how to manage users in HelpDude. Create new users, assign roles, view user details, 
          and update user information through the admin panel.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Admin role permissions</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Access to Admin section</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>User details (name, email)</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Understanding of user roles</span>
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">1</div>
          <div className="step-header-content">
            <h3>Create New User</h3>
            <p className="step-subtitle">Add users and assign roles</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>To create a new user in HelpDude, navigate to the Admin section and click the <strong>"Create"</strong> button.</p>
            
            <p><strong>Fill in User Details:</strong></p>
            <ul>
              <li><strong>USERNAME:</strong> Enter a unique username for the user</li>
              <li><strong>FULL NAME:</strong> Enter the user's complete name</li>
              <li><strong>USER ROLE:</strong> Select the appropriate role from the dropdown
                <ul>
                  <li><strong>Admin:</strong> Full access including SME page and user management</li>
                  <li><strong>User:</strong> Standard access without SME privileges</li>
                </ul>
              </li>
              <li><strong>EMAIL ADDRESS:</strong> Enter the user's valid email address</li>
              <li><strong>PASSWORD:</strong> Enter a secure password for the user</li>
            </ul>

            <div className="tip-box-modern">
              <div className="tip-icon">🔐</div>
              <p><strong>Admin Role:</strong> Only users with Admin role can access the SME page and manage other users. Choose this role carefully.</p>
            </div>

            <p><strong>Additional Options:</strong></p>
            <ul>
              <li><strong>CREATE USER:</strong> Click to create the user with provided details</li>
              <li><strong>GENERATE PASSWORD:</strong> Click to automatically generate a secure password</li>
            </ul>

            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>User Created:</strong> Once created, the user can log in with their credentials and access features based on their assigned role.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/admin_1.png`} alt="Create User Form" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">2</div>
          <div className="step-header-content">
            <h3>View All Users</h3>
            <p className="step-subtitle">Access user list and details</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>To view all registered users, click the <strong>"Show"</strong> button in the Admin section.</p>

            <p><strong>User List Display:</strong></p>
            <ul>
              <li>See all users in a card-based layout</li>
              <li>Each card shows the username at the top</li>
              <li>User role is displayed with a badge (e.g., "admin")</li>
              <li>Full name and email address are shown below</li>
            </ul>

            <div className="tip-box-modern">
              <div className="tip-icon">👥</div>
              <p><strong>User Information:</strong> The user count is displayed at the top (e.g., "1 users"). This helps you track the number of active users.</p>
            </div>

            <p><strong>Access User Details:</strong></p>
            <ul>
              <li>Click on any user card to view and edit their details</li>
              <li>A popup modal will appear with the user's information</li>
              <li>You can then proceed to update or manage the user</li>
            </ul>

            <div className="success-box-modern">
              <div className="success-icon">📋</div>
              <p><strong>Quick Overview:</strong> The Show page gives you a quick overview of all users and their roles at a glance.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/admin_2.png`} alt="View Users List" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">3</div>
          <div className="step-header-content">
            <h3>Update User Information</h3>
            <p className="step-subtitle">Modify user details and manage accounts</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>When you click on a user card, an update popup modal appears with all the user's current information.</p>

            <p><strong>Editable Fields:</strong></p>
            <ul>
              <li><strong>USERNAME:</strong> Modify the username if needed</li>
              <li><strong>NAME:</strong> Update the user's full name</li>
              <li><strong>ROLE:</strong> Change the user's role (admin/user)</li>
              <li><strong>EMAIL:</strong> Update the email address</li>
              <li><strong>PASSWORD:</strong> Change password or leave blank to keep unchanged</li>
            </ul>

            <div className="tip-box-modern">
              <div className="tip-icon">🔒</div>
              <p><strong>Password Update:</strong> The password field shows "Leave blank to keep unchanged". Only fill this if you want to set a new password.</p>
            </div>

            <p><strong>Action Buttons:</strong></p>
            <ul>
              <li><strong>UPDATE:</strong> Click to save all changes made to the user's information</li>
              <li><strong>DELETE:</strong> Click to permanently remove the user from the system</li>
              <li><strong>Close (X):</strong> Click the X button in the top right to cancel and close the popup</li>
            </ul>

            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>Changes Saved:</strong> After clicking Update, all modifications are saved and the user's access is updated accordingly.</p>
            </div>

            <div className="tip-box-modern">
              <div className="tip-icon">⚠️</div>
              <p><strong>Warning:</strong> Deleting a user is permanent. Make sure you want to remove the user before clicking the Delete button.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/admin_3.png`} alt="Update User Popup" />
          </div>
        </div>
      </div>

      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>Troubleshooting & Best Practices</h3>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">👤</div>
            <h4>Username Already Exists</h4>
            <p>Each username must be unique. If you get an error, try a different username.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔐</div>
            <h4>Password Requirements</h4>
            <p>Use strong passwords with a mix of letters, numbers, and special characters for better security.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">👥</div>
            <h4>Role Assignment</h4>
            <p>Be careful when assigning Admin roles. Only trusted users should have admin access to SME features.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📧</div>
            <h4>Email Validation</h4>
            <p>Ensure email addresses are valid and unique to prevent authentication issues.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>User Management Complete!</strong> You now know how to create, view, update, and manage users in HelpDude. Remember that Admin users have full access to SME features and user management!</p>
      </div>
    </div>
  );
};

export default AdminTutorial;

