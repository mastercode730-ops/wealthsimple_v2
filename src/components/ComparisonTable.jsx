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
    <section className="py-20 md:py-32 bg-[#090a0f] text-white">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-16 text-white">
          The difference is clear
        </h2>
        
        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-800">
                <th className="p-6 text-left text-xl font-serif w-1/4 text-white">Feature</th>
                <th className="p-6 text-left text-2xl font-serif text-white font-bold w-1/4 bg-[#13151f] rounded-t-2xl">Wealthsimple</th>
                <th className="p-6 text-left text-xl font-serif text-neutral-400 w-1/4">Bank A</th>
                <th className="p-6 text-left text-xl font-serif text-neutral-400 w-1/4">Bank B</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-neutral-800">
                  <td className="p-6 font-medium text-white">{row.feature}</td>
                  <td className="p-6 font-bold bg-[#13151f] text-fintech-emerald">{row.ws}</td>
                  <td className="p-6 text-neutral-400">{row.bank}</td>
                  <td className="p-6 text-neutral-400">{row.bank}</td>
                </tr>
              ))}
              <tr>
                <td className="p-6"></td>
                <td className="p-6 bg-[#13151f] rounded-b-2xl"></td>
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
