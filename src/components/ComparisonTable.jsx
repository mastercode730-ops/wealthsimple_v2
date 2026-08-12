import React from 'react';

const ComparisonTable = () => {
  const rows = [
    { feature: 'Fees', ws: '$0 commissions', bank: 'High trading fees' },
    { feature: 'Interest', ws: 'Up to 4%', bank: 'Practically 0%' },
    { feature: 'Investing', ws: 'Automated & Self-directed', bank: 'Limited options' },
    { feature: 'Accounts', ws: 'TFSA, RRSP, FHSA', bank: 'Standard accounts' },
    { feature: 'Support', ws: '7 days a week', bank: 'Long wait times' },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-16">
          The difference is clear
        </h2>
        
        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="p-6 text-left text-xl font-serif w-1/4">Feature</th>
                <th className="p-6 text-left text-2xl font-serif text-ws-dark font-bold w-1/4 bg-ws-off-white rounded-t-2xl">Wealthsimple</th>
                <th className="p-6 text-left text-xl font-serif text-neutral-500 w-1/4">Bank A</th>
                <th className="p-6 text-left text-xl font-serif text-neutral-500 w-1/4">Bank B</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-neutral-200">
                  <td className="p-6 font-medium">{row.feature}</td>
                  <td className="p-6 font-bold bg-ws-off-white">{row.ws}</td>
                  <td className="p-6 text-neutral-600">{row.bank}</td>
                  <td className="p-6 text-neutral-600">{row.bank}</td>
                </tr>
              ))}
              <tr>
                <td className="p-6"></td>
                <td className="p-6 bg-ws-off-white rounded-b-2xl"></td>
                <td className="p-6"></td>
                <td className="p-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
