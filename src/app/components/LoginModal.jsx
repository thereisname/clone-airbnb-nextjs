const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // 부모 div에 z-index 및 fixed 위치 추가
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
      {/* z-index 추가 */}
      <div className="absolute inset-0 bg-black opacity-50 z-50" onClick={onClose}></div>
      {/* z-index 추가 */}
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full z-50" onClick={(e) => e.stopPropagation()}>
        <div className="text-center font-bold mb-4">로그인 또는 회원 가입</div>
        <div className="text-center text-gray-700 mb-4">에어비앤비에 오신 것을 환영합니다.</div>
        <input type="text" placeholder="국가/지역" className="border p-2 mb-2 w-full" />
        <input type="text" placeholder="전화번호" className="border p-2 mb-4 w-full" />
        <button className="bg-pink-500 text-white py-2 px-4 rounded mb-2 w-full">계속</button>
        <hr className="my-4" />
        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 w-full">네이버로 로그인하기</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-2 w-full">페이스북으로 로그인하기</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded mb-2 w-full">구글로 로그인하기</button>
        <button className="bg-black text-white py-2 px-4 rounded mb-2 w-full">애플로 로그인하기</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded w-full">이메일로 로그인하기</button>
      </div>
    </div>
  );
}

export default LoginModal;
