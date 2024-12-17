import React, { useState } from 'react';

const steps = ['Select Platform', 'Choose Asset', 'Set Amount', 'Confirm'];

const TransferWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fromPlatform: '',
    toPlatform: '',
    asset: '',
    amount: '',
  });

  const calculateFee = () => {
    // Simulated fee calculation
    return (parseFloat(formData.amount) || 0) * 0.01;
  };

  return (
    <div className="bg-white/5 rounded-xl p-6">
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex flex-col items-center ${
              index <= currentStep ? 'text-purple-400' : 'text-gray-500'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              index <= currentStep ? 'bg-purple-400/20' : 'bg-gray-800'
            }`}>
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {currentStep === 0 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">From Platform</label>
              <select
                className="w-full bg-white/10 rounded-lg p-2"
                value={formData.fromPlatform}
                onChange={(e) => setFormData({ ...formData, fromPlatform: e.target.value })}
              >
                <option value="">Select Platform</option>
                <option value="decentraland">Decentraland</option>
                <option value="sandbox">The Sandbox</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">To Platform</label>
              <select
                className="w-full bg-white/10 rounded-lg p-2"
                value={formData.toPlatform}
                onChange={(e) => setFormData({ ...formData, toPlatform: e.target.value })}
              >
                <option value="">Select Platform</option>
                <option value="decentraland">Decentraland</option>
                <option value="sandbox">The Sandbox</option>
              </select>
            </div>
          </div>
        )}

        {/* Add more step content here */}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded-lg bg-white/10 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500"
          >
            {currentStep === steps.length - 1 ? 'Confirm Transfer' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferWizard;