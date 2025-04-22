import { useState } from 'react';
import { InputBox } from './components';
import useCurrency from './hooks/useCurrency';

function App() {
  const [amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const useCurrencyData = useCurrency(From);
  const option = Object.keys(useCurrencyData);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
    convert(); // Recalculate convertedAmount after swapping
  };

  const convert = () => {
    setConvertedAmount(amount * useCurrencyData[To]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/29902414/pexels-photo-29902414/free-photo-of-calm-ocean-view-with-gentle-clouds-at-dusk.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onamountchange={(amount) => setAmount(amount)} // Update amount
                currencyoptions={option}
                oncurrencychange={(currency) => setFrom(currency)} // Update From currency
                selectcurrency={From}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyoptions={option}
                oncurrencychange={(currency) => setTo(currency)} // Update To currency
                selectcurrency={To} // Correct currency
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
