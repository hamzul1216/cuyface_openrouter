import React from "react";

function ModelSelector({ onSelect, selectedModel }) {
  const models = [
    {
      name: "mistralai",
      value: "mistralai/mistral-small-3.2-24b-instruct:free",
    },
    { name: "meta-llama", value: "meta-llama/llama-4-maverick:free" },
    { name: "qwen", value: "qwen/qwen2.5-vl-32b-instruct:free" },
    { name: "gemini", value: "google/gemini-2.0-flash-exp:free" },
  ];

  return (
    <div className="text-center bg-gray-800 p-6 mt-8 rounded-xl shadow border border-gray-700">
      <p className="text-base">
        Silahkan pilih AI model yang akan digunakan untuk melakukan prediksi
      </p>
      <div className="flex items-center justify-center gap-5 mt-4">
        {models.map((model) => {
          return (
            <button
              key={model.value}
              onClick={() => onSelect(model.value)}
              className={`px-4 py-2 rounded-lg hover:scale-105 hover:opacity-60  transition-all duration-200 border border-white cursor-pointer ${
                selectedModel === model.value
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-600 text-gray-200"
              }`}
            >
              {model.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModelSelector;
