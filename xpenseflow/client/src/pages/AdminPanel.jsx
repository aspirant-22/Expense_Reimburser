import React, { useState } from "react";

export default function AdminDashboard() {
  const managers = ["John", "Michael", "Rahul", "Naman"];

  const [rule, setRule] = useState({
    user: "",
    description: "",
    manager: managers[0],
    isApprover: false,
    approvalSequence: false,
    minApprovalPercentage: 50,
  });

  const [users, setUsers] = useState([
    { name: "Sarah", requiresApproval: false },
    { name: "Nancy", requiresApproval: false },
    { name: "Stephen", requiresApproval: false },
  ]);

  const handleRuleChange = (field, value) => {
    setRule({ ...rule, [field]: value });
  };

  const toggleUserApproval = (index) => {
    const newUsers = [...users];
    newUsers[index].requiresApproval = !newUsers[index].requiresApproval;
    setUsers(newUsers);
  };

  const handleSaveRule = () => {
    console.log("Rule Saved:", rule);
    console.log("Users list:", users);
    alert("Rule saved successfully! ✅ (Check console for details)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        ⚙️ Admin Dashboard
      </h1>

      {/* Two Beautiful Cards in a Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
            🧾 Create Approval Rule
          </h2>

          <div className="space-y-5">
            {/* User */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">User</label>
              <input
                type="text"
                placeholder="Enter user name"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-lg w-full transition-all"
                value={rule.user}
                onChange={(e) => handleRuleChange("user", e.target.value)}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter rule description"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-lg w-full transition-all"
                rows="3"
                value={rule.description}
                onChange={(e) => handleRuleChange("description", e.target.value)}
              />
            </div>

            {/* Manager */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Manager
              </label>
              <select
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-lg w-full transition-all"
                value={rule.manager}
                onChange={(e) => handleRuleChange("manager", e.target.value)}
              >
                {managers.map((m, idx) => (
                  <option key={idx} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Column Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
            🧩 Rule Conditions
          </h2>

          <div className="space-y-5">
            {/* Checkboxes */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={rule.isApprover}
                onChange={(e) =>
                  handleRuleChange("isApprover", e.target.checked)
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-700">Is Manager an Approver?</span>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={rule.approvalSequence}
                onChange={(e) =>
                  handleRuleChange("approvalSequence", e.target.checked)
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-700">
                Approval Sequence Matters
              </span>
            </div>

            {/* Approval Percentage */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Minimum Approval Percentage
              </label>
              <input
                type="number"
                min={0}
                max={100}
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-lg w-full transition-all"
                value={rule.minApprovalPercentage}
                onChange={(e) =>
                  handleRuleChange("minApprovalPercentage", e.target.value)
                }
              />
            </div>

            {/* User List Table */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                👥 Users List
              </h3>
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-2 border">User Name</th>
                    <th className="px-4 py-2 border text-center">
                      Requires Approval?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-all"
                    >
                      <td className="px-4 py-2 border text-gray-700">
                        {user.name}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <input
                          type="checkbox"
                          checked={user.requiresApproval}
                          onChange={() => toggleUserApproval(index)}
                          className="w-4 h-4 accent-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSaveRule}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          💾 Save Rule
        </button>
      </div>
    </div>
  );
}
