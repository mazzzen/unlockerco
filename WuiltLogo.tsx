const WuiltLogo = ({ size = 38 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 38 34">
      <defs>
        <filter
          id="1jqqtms51a"
          width="101.7%"
          height="148%"
          x="-.8%"
          y="-24%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.687160326 0 0 0 0 0.687160326 0 0 0 0 0.687160326 0 0 0 0.2 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fill="currentColor">
          <g
            filter="url(#1jqqtms51a)"
            transform="translate(-1153 -78) translate(0 70)"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M4.625.075c.42-.126.981-.079 1.282.04.137.053.22.122.276.202.084.119.115.277.093.474-.04.346-.475 1.278-.916 2.245-.648 1.421-.793 1.698-1.298 3.131-.505 1.434-.88 2.742-1.126 3.923-.247 1.182-.344 2.144-.292 2.887.025.344.233.987.66 1.115.432.13 1.046-.303 1.476-1.115l-.021.038.908 1.525c-.69.996-1.738 1.545-2.698 1.414l-.17-.03c-.787-.175-1.295-.784-1.32-.816-.565-.75-.616-1.668-.699-1.653-.06.012.015.495-.05.511-.098.023-.535-.99-.678-2.193-.1-.826-.037-1.537.03-2.26.112-1.23.332-2.145.523-2.868.033-.122.276-1.022.59-1.852.726-1.92 2.158-4.337 3.43-4.718z"
                    transform="translate(1146 9) translate(16 8)"
                  />
                  <path
                    d="M6.148 10.053c0-.452.045-.857.136-1.215.09-.359.22-.643.388-.856.168-.212.356-.319.563-.319.207 0 .317.127.33.378.013.253-.039.572-.155.956-.117.385-.278.797-.485 1.235-.208.438-.415.843-.622 1.214-.104-.477-.155-.942-.155-1.393zm1.36-4.938c.828 0 1.417.285 1.766.856.195.318.495.95.408 2.11-.124 1.643-.902 2.856-1.324 3.497-.52.79-1.066 1.363-1.472 1.74.05.15.184.475.505.737.411.335.864.343 1.016.344.637.003 1.091-.364 1.586-.762.442-.357.712-.694 1.029-1.095.287-.364.65-.87 1.012-1.521l-.04-.036 1.7.41-.05.012c-.303.62-.641 1.179-1.015 1.678l-.229.293c-.466.57-.95 1.05-1.456 1.433-.361.276-.815.616-1.495.877-.385.147-.796.3-1.36.298-.24 0-.822-.01-1.453-.367-.559-.315-.88-.747-1.032-.987l-.003.005-.922-1.625c-.342-.726-.512-1.54-.512-2.442 0-.929.136-1.798.408-2.608.272-.81.66-1.487 1.165-2.031s1.094-.816 1.767-.816z"
                    transform="translate(1146 9) translate(16 8)"
                  />
                  <path
                    d="M13.109 8.134c-.182.598-.35 1.03-.505 1.294-.363-.398-.583-.922-.66-1.573-.078-.65-.065-1.28.038-1.891.103-.61.285-1.128.544-1.553.258-.425.557-.598.893-.518.181.054.272.312.272.776 0 .465-.052 1.01-.155 1.633-.104.624-.247 1.235-.427 1.832zm.213-7.447c.53-.145 1.03-.14 1.495.02.88.292 1.32 1.235 1.32 2.828 0 1.593-.569 3.69-1.708 6.292.336-.186.68-.458 1.03-.817.349-.358.672-.75.97-1.175.26-.371.53-.731.816-1.254.037-.069.19-.35.415-.714.288-.466.405-.595.575-.68.172-.086.487-.169.654-.021.078.069.184.245.006.878-.191.68-.54 1.144-1.087 1.95-.415.612-.855 1.162-1.32 1.654-.467.49-.94.895-1.418 1.214-.48.319-.952.518-1.418.597l-.016.034-1.605-.4.012-.02c-.302-.265-.741-.705-1.13-1.343l-.127-.22c-.072-.132-1.233-2.326-.512-4.76.334-1.131 1.017-2.125.893-2.211-.07-.048-.328.266-.359.239-.04-.038.354-.7 1-1.254.3-.26.785-.637 1.514-.837z"
                    transform="translate(1146 9) translate(16 8)"
                  />
                </g>
                <path
                  d="M19.99 4.07c-.009.158-.029.35-.098.548-.032.089-.063.178-.127.255-.156.187-.353.116-.39.102-.034-.012-.163-.065-.268-.245-.033-.056-.1-.18-.107-.333-.008-.21.105-.366.253-.578.502-.72.539-.856.614-.811.17.099.132.867.122 1.063"
                  transform="translate(1146 9) translate(16 8)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { WuiltLogo };
