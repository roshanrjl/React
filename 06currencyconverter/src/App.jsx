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
    <div >
      <p className='text-4xl text-center text-green-600 mt-5 bg-black'>Welcome to currency convertor</p>
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed my-10" style={{ 
      backgroundImage: `url('https://cdn.pixabay.com/photo/2023/12/18/14/30/winter-8456170_1280.png')`,
    }}
    >  
  
      <div className="w-full pt-20">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg  backdrop-blur-sm bg-white/30">
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
    </div>
  );
}

export default App;
