import {useState} from 'react';

function NumberButton({ title }) {
  const [selected, setSelected] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 50); // 애니메이션 지속 시간과 동일하게 설정
  };

  return (
    <div className='py-2'>
      <div className="mb-4">{title}</div>
      <div className="text-sm w-full space-x-2 mb-4">
        <button
          onClick={() => handleClick(null)}
          className={`px-7 py-2 border rounded-3xl transition-all duration-50 ease-in-out transform ${selected === null ? 'bg-black text-white' : 'border-gray-200 hover:border-black'} ${clicked && selected === null ? 'scale-95' : 'scale-100'}`}
        >
          상관없음
        </button>
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`px-6 py-2 border rounded-3xl transition-all duration-50 ease-in-out transform ${selected === index ? 'bg-black text-white' : 'border-gray-200 hover:border-black'} ${clicked && selected === index ? 'scale-95' : 'scale-100'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleClick(8)}
          className={`px-5 py-2 border rounded-3xl transition-all duration-50 ease-in-out transform ${selected === 8 ? 'bg-black text-white' : 'border-gray-200 hover:border-black'} ${clicked && selected === 8 ? 'scale-95' : 'scale-100'}`}
        >
          8+
        </button>
      </div>
    </div>
  );
}

function BedroomSelector() {
  return (
    <div className='py-6'>
      <header className="font-semibold text-2xl">침실과 침대</header>
      <div className="my-4">
        <NumberButton title="침실" />
        <NumberButton title="침대" />
        <NumberButton title="욕실" />
      </div>
    </div>
  );
}

export default BedroomSelector;
