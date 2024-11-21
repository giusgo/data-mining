import React from "react";

type ClassificationReportRow = {
  label: string;
  precision: number;
  recall: number;
  f1Score: number;
  support: number;
};

type ResultsData = {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  classificationReport: ClassificationReportRow[];
  crossValidationScores: number[];
  meanCVAccuracy: number;
};

type ResultsCardProps = {
  data: ResultsData;
};

const ResultsCard: React.FC<ResultsCardProps> = ({ data }) => {
  const {
    accuracy,
    precision,
    recall,
    f1Score,
    classificationReport,
    crossValidationScores,
    meanCVAccuracy,
  } = data;

  return (
    <div className="mx-auto mt-6 shadow-md border rounded-md p-4">
      <div className="text-xl font-bold mb-4">Classification Report</div>
      <div className="space-y-4">
        <div>
          <p><strong>Accuracy:</strong> {accuracy.toFixed(3)}</p>
          <p><strong>Precision:</strong> {precision.toFixed(3)}</p>
          <p><strong>Recall:</strong> {recall.toFixed(3)}</p>
          <p><strong>F1-Score:</strong> {f1Score.toFixed(3)}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Classification Report:</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Label</th>
                <th className="border border-gray-300 px-2 py-1">Precision</th>
                <th className="border border-gray-300 px-2 py-1">Recall</th>
                <th className="border border-gray-300 px-2 py-1">F1-Score</th>
                <th className="border border-gray-300 px-2 py-1">Support</th>
              </tr>
            </thead>
            <tbody>
              {classificationReport.map((row) => (
                <tr key={row.label}>
                  <td className="border border-gray-300 px-2 py-1">{row.label}</td>
                  <td className="border border-gray-300 px-2 py-1">{row.precision.toFixed(2)}</td>
                  <td className="border border-gray-300 px-2 py-1">{row.recall.toFixed(2)}</td>
                  <td className="border border-gray-300 px-2 py-1">{row.f1Score.toFixed(2)}</td>
                  <td className="border border-gray-300 px-2 py-1">{row.support.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Cross-Validation Accuracy Scores:</h3>
          <p className="whitespace-pre-wrap">{crossValidationScores.join(", ")}</p>
          <p><strong>Mean CV Accuracy:</strong> {meanCVAccuracy.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
