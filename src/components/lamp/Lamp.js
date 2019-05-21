import React from 'react'
import Socket from './Socket';
import './lamp.scss'

const Lamp = ({ on = false }) => {
  return (
    <svg className="lamp bounce"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5221.493 5221.493"
      width="400"
      height="400">

      <path id="lamp-left-side" d="M 3524.543 603.67 C 3262.176 414.044 2933.651 320.023 2610.75 335.483 L 2610.75 3891.252 C 2610.912 3891.235 2611.075 3891.22 2611.238 3891.187 C 2808.667 3883.842 3078.563 3792.132 3178.695 3605.595 C 3185.804 3592.374 3192.031 3578.58 3197.31 3564.199 C 3232.103 3469.41 3240.734 3366.548 3275.919 3271.891 C 3367.015 3026.943 3604.918 2888.046 3761.808 2691.195 C 3918.259 2494.9 4023.016 2232.188 4067.208 1986.587 C 4162.324 1457.912 3963.071 920.591 3524.543 603.67 Z"
        className={on ? 'lamp-left-side-on' : 'lamp-off'} />

      <path id="lamp-right-side" d="M 2610.747 335.483 C 2287.845 320.023 1959.319 414.043 1696.951 603.67 C 1258.423 920.591 1059.187 1457.912 1154.286 1986.588 C 1198.477 2232.188 1303.235 2494.9 1459.686 2691.195 C 1616.578 2888.046 1854.481 3026.943 1945.575 3271.891 C 1980.762 3366.548 1989.39 3469.41 2024.185 3564.199 C 2029.463 3578.58 2035.69 3592.374 2042.799 3605.595 C 2142.949 3792.132 2408.091 3883.843 2610.257 3891.187 C 2610.421 3891.22 2610.583 3891.236 2610.747 3891.252 L 2610.75 3891.252 L 2610.75 335.483 L 2610.747 335.483 Z"
        className={on ? 'lamp-right-side-on' : 'lamp-off'} />

      <path id="lamp-circle" d="M 3642.234 1832.464 C 3642.234 2402.127 3180.428 2863.935 2610.75 2863.935 C 2041.073 2863.935 1579.266 2402.127 1579.266 1832.464 C 1579.266 1262.788 2041.073 800.98 2610.75 800.98 C 3180.428 800.98 3642.234 1262.788 3642.234 1832.464 Z"
        className={on ? 'lamp-circle-on' : 'lamp-circle-off'} />

      <path id="left-filament" d="M 2425.854 1693.602 C 2451.677 1742.01 2464.358 1786.511 2463.525 1825.898 C 2462.953 1853.37 2452.526 1878.439 2439.271 1884.208 C 2424.318 1890.73 2395.407 1878.358 2370.55 1854.807 C 2305.227 1792.9 2274.633 1695.938 2292.61 1607.768 C 2296.075 1590.822 2300.685 1574.69 2306.405 1559.443 C 2364.373 1594.596 2403.039 1650.832 2425.854 1693.602 Z M 2322.29 1344.076 C 2295.65 1363.736 2272.083 1386.6 2251.802 1412.275 C 2184.127 1401.554 2113.558 1413.534 2046.258 1448.115 C 1982.815 1480.719 1925.059 1531.546 1879.234 1595.103 C 1833.997 1657.859 1804.334 1727.399 1793.466 1796.202 C 1778.677 1889.782 1791.57 1993.935 1832.885 2114.659 C 1924.373 2382.012 2014.291 2652.619 2101.251 2914.316 C 2188.703 3177.468 2271.283 3426.012 2355.971 3673.492 C 2364.569 3698.611 2388.037 3714.413 2413.171 3714.413 C 2419.659 3714.413 2426.279 3713.352 2432.75 3711.129 C 2464.358 3700.327 2481.207 3665.941 2470.389 3634.352 C 2385.879 3387.377 2303.381 3139.064 2216.027 2876.188 C 2128.969 2614.228 2038.969 2343.362 1947.302 2075.502 C 1912.541 1973.898 1901.281 1888.703 1912.917 1815.078 C 1929.374 1710.958 2006.937 1604.287 2101.546 1555.684 C 2124.883 1543.688 2154.774 1532.607 2188.522 1529.976 C 2182.705 1547.218 2177.883 1565.114 2174.109 1583.614 C 2161.23 1646.812 2165.038 1713.851 2185.106 1777.49 C 2205.193 1841.128 2240.542 1898.214 2287.365 1942.584 C 2305.358 1959.647 2334.677 1982.804 2372.118 1996.32 C 2412.421 2010.85 2452.346 2010.424 2487.581 1995.078 C 2545.697 1969.747 2582.811 1905.895 2584.429 1828.431 C 2585.705 1768.092 2568.25 1703.587 2532.557 1636.679 C 2513.119 1600.244 2489.851 1565.718 2462.393 1534.83 C 2436.025 1505.167 2402.662 1484.84 2374.957 1457.983 C 2426.757 1400.859 2524.569 1382.151 2598.325 1379.423 C 2601.839 1379.292 2605.513 1379.22 2609.31 1379.203 L 2608.937 1256.576 C 2504.761 1257.015 2400.73 1286.184 2322.29 1344.076 Z"
        className={on ? 'left-filament-on' : 'filament-off'} />

      <path id="right-filament" d="M 2851.423 1854.807 C 2826.564 1878.358 2797.671 1890.729 2782.7 1884.209 C 2769.447 1878.439 2759.02 1853.369 2758.448 1825.897 C 2757.631 1786.527 2770.296 1742.009 2796.118 1693.618 C 2818.95 1650.815 2857.618 1594.579 2915.602 1559.426 C 2921.288 1574.674 2925.896 1590.805 2929.362 1607.769 C 2947.34 1695.938 2916.744 1792.917 2851.423 1854.807 Z M 3428.522 1796.202 C 3417.638 1727.415 3387.976 1657.859 3342.738 1595.103 C 3296.914 1531.545 3239.158 1480.719 3175.715 1448.114 C 3108.447 1413.55 3037.911 1401.554 2970.268 1412.258 C 2949.987 1386.519 2926.388 1363.607 2899.715 1343.895 C 2820.308 1285.217 2714.547 1256.133 2608.938 1256.577 L 2609.311 1379.203 C 2681.796 1378.878 2802.423 1399.625 2843.755 1460.459 C 2782.558 1515.07 2729.059 1562.366 2689.415 1636.695 C 2653.723 1703.586 2636.268 1768.091 2637.543 1828.43 C 2639.162 1905.895 2676.276 1969.763 2734.392 1995.078 C 2769.626 2010.425 2809.552 2010.866 2849.854 1996.321 C 2887.295 1982.821 2916.615 1959.647 2934.608 1942.585 C 2981.431 1898.23 3016.796 1841.129 3036.866 1777.489 C 3056.951 1713.85 3060.742 1646.811 3047.864 1583.614 C 3044.09 1565.13 3039.284 1547.234 3033.45 1529.977 C 3067.198 1532.607 3097.106 1543.689 3120.443 1555.683 C 3215.052 1604.305 3292.616 1710.957 3309.056 1815.078 C 3322.703 1901.434 3299.17 1992.301 3273.887 2077.97 C 3134.547 2550.23 2964.206 3106.819 2757.19 3654.289 C 2745.391 3685.537 2761.128 3720.429 2792.376 3732.245 C 2799.42 3734.909 2806.643 3736.167 2813.752 3736.167 C 2838.17 3736.167 2861.163 3721.262 2870.315 3697.058 C 3078.735 3145.862 3249.911 2586.593 3389.871 2112.191 C 3417.784 2017.615 3446.075 1907.399 3428.522 1796.202"
        className={on ? 'right-filament-on' : 'filament-off'} />

      <Socket />
    </svg>
  )
}


export default Lamp