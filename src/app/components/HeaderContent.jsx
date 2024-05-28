const HeaderContent = () => (
  <div className="relative grid grid-cols-3 items-center">
    <div>
      <a href="/">
        <img src="/assets/airbnbLogo.svg" alt="에어비앤비 로고입니다." />
      </a>
    </div>

    <nav className="header-nav">
      <ul className="flex justify-center gap-4">
        <li>
          <a href="/">숙소</a>
        </li>
        <li>
          <a href="/">체험</a>
        </li>
        <li>
          <a href="/">온라인 체험</a>
        </li>
      </ul>
    </nav>

    <div className="flex justify-end items-center gap-6">
      <div className="text-neutral-800 text-sm">당신의 공간을 에어비앤비하세요</div>
      <button className="relative">
        <img src="/assets/language.svg" alt="언어 선택" />
      </button>
      <button className="py-1 px-2 bg-white rounded-[29px] border border-gray-300 flex items-center min-w-[85px]">
        <img src="/assets/menu.svg" alt="메뉴" className="mr-4" />
        <img src="/assets/account.svg" alt="계정" />
      </button>
    </div>
  </div>
);

export default HeaderContent;
