import { useState } from 'react';

const faqData = [
  {
    question: "Hvordan få tilgang til å legge til nye nettverkskomponenter?",
    answer: "De som legger til nettverkskomponenter må sende inn en søknad slik at informasjonen som står på nettsiden forblir troverdig og presis."
  },
  {
    question: "Hva gjør jeg hvis jeg finner feil i informasjonen?",
    answer: "Hvis noen finner noe oppriktig feil i informasjonen på nettsiden så setter vi stor pris på om dette blir rapportert."
  },
  {
    question: "Hva gjør jeg dersom jeg skal formidle informasjonen til noen som ikke kan se?",
    answer: "Dersom du skal formidle informasjonen til noen som ikke kan se eller har svekket syn og ikke vil bruke en skjermleser, så jobber vi nå på UX design der vi skal inkludere lydinnspilling av all informasjon om nettverkskomponentene."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-2/3 h-screen p-4 flex items-center justify-center">
        <div className='w-2/3 h-2/3'>
            <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
            {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition">
                <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <span>{expandedIndex === index ? '-' : '+'}</span>
                </div>
            </button>
            {expandedIndex === index && (
                <div className="p-4">
                {faq.answer}
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
  );
};

export default FAQ;