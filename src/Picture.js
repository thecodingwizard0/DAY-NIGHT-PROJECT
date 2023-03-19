import React from "react";
import cn from "classnames";

export const Picture = ({ state }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1000 666.667"
      className={cn("picture", `picture-${state}`)}
    >
      <defs>
        <clipPath id="clipPath20" clipPathUnits="userSpaceOnUse">
          <path d="M0 0h750v500H0z"></path>
        </clipPath>
        <clipPath id="clipPath28" clipPathUnits="userSpaceOnUse">
          <path d="M456.043 153.313h753.997v-1.371H456.043z"></path>
        </clipPath>
        <clipPath id="clipPath44" clipPathUnits="userSpaceOnUse">
          <path d="M410.381 144.026h261.778v-1.372H410.381z"></path>
        </clipPath>
        <clipPath id="clipPath60" clipPathUnits="userSpaceOnUse">
          <path d="M353.11 103.008h410.373v-1.372H353.11z"></path>
        </clipPath>
        <clipPath id="clipPath76" clipPathUnits="userSpaceOnUse">
          <path d="M-135.177 158.731h389.346v-1.372h-389.346z"></path>
        </clipPath>
        <clipPath id="clipPath92" clipPathUnits="userSpaceOnUse">
          <path d="M181.362 148.079h157.166v-.965H181.362z"></path>
        </clipPath>
        <clipPath id="clipPath108" clipPathUnits="userSpaceOnUse">
          <path d="M351.628 131.053h157.165v-.965H351.628z"></path>
        </clipPath>
        <clipPath id="clipPath124" clipPathUnits="userSpaceOnUse">
          <path d="M277.33 158.915h157.165v-.965H277.33z"></path>
        </clipPath>
        <clipPath id="clipPath140" clipPathUnits="userSpaceOnUse">
          <path d="M582.26 133.383h265.516v-1.004H582.26z"></path>
        </clipPath>
        <clipPath id="clipPath156" clipPathUnits="userSpaceOnUse">
          <path d="M159.692 112.514h325.883v-1.034H159.692z"></path>
        </clipPath>
        <clipPath id="clipPath172" clipPathUnits="userSpaceOnUse">
          <path d="M398.073 121.772h191.2v-.976h-191.2z"></path>
        </clipPath>
        <clipPath id="clipPath188" clipPathUnits="userSpaceOnUse">
          <path d="M28.956 130.237h254.625v-1.225H28.956z"></path>
        </clipPath>
        <clipPath id="clipPath204" clipPathUnits="userSpaceOnUse">
          <path d="M-172.267 138.952h480.609v-1.334h-480.609z"></path>
        </clipPath>
        <clipPath id="clipPath220" clipPathUnits="userSpaceOnUse">
          <path d="M183.599 167.61h477.574v-1.372H183.599z"></path>
        </clipPath>
        <clipPath id="clipPath236" clipPathUnits="userSpaceOnUse">
          <path d="M-444.64 486.342h1521V240.749h-1521z"></path>
        </clipPath>
        <clipPath id="clipPath240" clipPathUnits="userSpaceOnUse">
          <path d="M-32.64 462.641h285v-9.182h-285z"></path>
        </clipPath>
        <clipPath id="clipPath244" clipPathUnits="userSpaceOnUse">
          <path d="M-4.544 278.082h322v-3.248h-322z"></path>
        </clipPath>
        <clipPath id="clipPath248" clipPathUnits="userSpaceOnUse">
          <path d="M-82.64 400.124h431v-1.586h-431z"></path>
        </clipPath>
        <clipPath id="clipPath252" clipPathUnits="userSpaceOnUse">
          <path d="M422.36 428.443h496v-3.956h-496z"></path>
        </clipPath>
        <clipPath id="clipPath256" clipPathUnits="userSpaceOnUse">
          <path d="M522.36 398.179h496v-5.448h-496z"></path>
        </clipPath>
        <clipPath id="clipPath260" clipPathUnits="userSpaceOnUse">
          <path d="M-91.64 348.102h754v-1.77h-754z"></path>
        </clipPath>
        <clipPath id="clipPath264" clipPathUnits="userSpaceOnUse">
          <path d="M-444.64 447.569h974v-3.158h-974z"></path>
        </clipPath>
        <clipPath id="clipPath268" clipPathUnits="userSpaceOnUse">
          <path d="M124.36 486.342h754v-2.604h-754z"></path>
        </clipPath>
        <clipPath id="clipPath272" clipPathUnits="userSpaceOnUse">
          <path d="M397.693 299.808h636.667v-3.822H397.693z"></path>
        </clipPath>
        <clipPath id="clipPath276" clipPathUnits="userSpaceOnUse">
          <path d="M164.36 367.605h702v-1.726h-702z"></path>
        </clipPath>
        <clipPath id="clipPath280" clipPathUnits="userSpaceOnUse">
          <path d="M-142.64 290.15h503v-3.015h-503z"></path>
        </clipPath>
        <clipPath id="clipPath284" clipPathUnits="userSpaceOnUse">
          <path d="M239.027 317.812h234v-1.507h-234z"></path>
        </clipPath>
        <clipPath id="clipPath288" clipPathUnits="userSpaceOnUse">
          <path d="M420.201 291.516h234v-1.507h-234z"></path>
        </clipPath>
        <clipPath id="clipPath292" clipPathUnits="userSpaceOnUse">
          <path d="M486.36 248.098h590v-7.349h-590z"></path>
        </clipPath>
        <clipPath id="clipPath472" clipPathUnits="userSpaceOnUse">
          <path d="M378.859 261.555h186.839v-69.863H378.859z"></path>
        </clipPath>
        <clipPath id="clipPath488" clipPathUnits="userSpaceOnUse">
          <path d="M77.881 285.997H264.72v-69.863H77.881z"></path>
        </clipPath>
        <clipPath id="clipPath504" clipPathUnits="userSpaceOnUse">
          <path d="M484.306 279.013h186.839V209.15H484.306z"></path>
        </clipPath>
        <clipPath id="clipPath520" clipPathUnits="userSpaceOnUse">
          <path d="M221.197 235.535h141.098v-58.989H221.197z"></path>
        </clipPath>
        <clipPath id="clipPath556" clipPathUnits="userSpaceOnUse">
          <path d="M339.932 204.937h30.601V174.36h-30.601z"></path>
        </clipPath>
        <clipPath id="clipPath576" clipPathUnits="userSpaceOnUse">
          <path d="M502.338 325.33H608.73V208.944H502.338z"></path>
        </clipPath>
        <clipPath id="clipPath596" clipPathUnits="userSpaceOnUse">
          <path d="M335.044 224.335h91.705v-51.389h-91.705z"></path>
        </clipPath>
        <clipPath id="clipPath616" clipPathUnits="userSpaceOnUse">
          <path d="M537.131 377.128h146.41V172.946h-146.41z"></path>
        </clipPath>
        <clipPath id="clipPath636" clipPathUnits="userSpaceOnUse">
          <path d="M403.838 266.199h108.088v-93.253H403.838z"></path>
        </clipPath>
        <clipPath id="clipPath656" clipPathUnits="userSpaceOnUse">
          <path d="M45.665 332.33h107.268V183.446H45.665z"></path>
        </clipPath>
        <clipPath id="clipPath676" clipPathUnits="userSpaceOnUse">
          <path d="M201.181 245.8h60.013v-72.041h-60.013z"></path>
        </clipPath>
        <clipPath id="clipPath696" clipPathUnits="userSpaceOnUse">
          <path d="M132.142 260.172h85.303v-87.226h-85.303z"></path>
        </clipPath>
        <clipPath id="clipPath716" clipPathUnits="userSpaceOnUse">
          <path d="M-79.289 358.633h152.56V172.946h-152.56z"></path>
        </clipPath>
        <clipPath id="clipPath736" clipPathUnits="userSpaceOnUse">
          <path d="M206.519 223.496h97.357v-50.55h-97.357z"></path>
        </clipPath>
        <clipPath id="clipPath756" clipPathUnits="userSpaceOnUse">
          <path d="M491.588 237.455h93.996v-64.509h-93.996z"></path>
        </clipPath>
        <clipPath id="clipPath776" clipPathUnits="userSpaceOnUse">
          <path d="M578.417 253.792h120.898v-80.846H578.417z"></path>
        </clipPath>
        <clipPath id="clipPath796" clipPathUnits="userSpaceOnUse">
          <path d="M416.961 215.398h79.779v-42.452h-79.779z"></path>
        </clipPath>
        <clipPath id="clipPath816" clipPathUnits="userSpaceOnUse">
          <path d="M5.603 257.683h87.793v-84.737H5.603z"></path>
        </clipPath>
        <clipPath id="clipPath836" clipPathUnits="userSpaceOnUse">
          <path d="M-28.045 230.586h77.347v-57.64h-77.347z"></path>
        </clipPath>
        <clipPath id="clipPath856" clipPathUnits="userSpaceOnUse">
          <path d="M33.416 227.1H157.31v-54.154H33.416z"></path>
        </clipPath>
        <clipPath id="clipPath872" clipPathUnits="userSpaceOnUse">
          <path d="M430.163 452.195h141.073V311.122H430.163z"></path>
        </clipPath>
        <clipPath id="clipPath888" clipPathUnits="userSpaceOnUse">
          <path d="M445.306 437.052h110.787V326.265H445.306z"></path>
        </clipPath>
        <clipPath id="clipPath912" clipPathUnits="userSpaceOnUse">
          <path d="M480.248 414.86h28.585v-28.585h-28.585z"></path>
        </clipPath>
        <clipPath id="clipPath928" clipPathUnits="userSpaceOnUse">
          <path d="M479.938 381.956h13.008v-13.008h-13.008z"></path>
        </clipPath>
        <clipPath id="clipPath944" clipPathUnits="userSpaceOnUse">
          <path d="M469.286 389.498h6.511v-6.511h-6.511z"></path>
        </clipPath>
      </defs>
      <g transform="matrix(1.33333 0 0 -1.33333 0 666.667)">
        <path
          fill={state === "day" ? "#86e1fb" : "#3a494d"}
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          d="M0 0h750v500H0z"
        ></path>
        <path
          fill={state === "day" ? "#00c9fc" : "#304e55"}
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          d="M0 6.004h750v171.859H0z"
        ></path>
        <g>
          <g clipPath="url(#clipPath20)">
            <g>
              <g>
                <g clipPath="url(#clipPath28)" opacity="0.16">
                  <g transform="translate(1210.043 152.627)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.379-168.789-.686-377-.686S-754-.379-754 0c0 .379 168.789.686 377 .686S0 .379 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath44)" opacity="0.16">
                  <g transform="translate(672.159 143.34)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.379-58.601-.686-130.889-.686-72.288 0-130.889.307-130.889.686 0 .379 58.601.686 130.889.686C-58.601.686 0 .379 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath60)" opacity="0.16">
                  <g transform="translate(763.483 102.322)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.379-91.865-.686-205.187-.686-113.321 0-205.186.307-205.186.686 0 .379 91.865.686 205.186.686C-91.865.686 0 .379 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath76)" opacity="0.16">
                  <g transform="translate(254.169 158.045)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.379-87.158-.686-194.673-.686-107.514 0-194.672.307-194.672.686 0 .379 87.158.686 194.672.686C-87.158.686 0 .379 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath92)" opacity="0.16">
                  <g transform="translate(338.528 147.699)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-35.182-.517-78.582-.573-43.4-.057-78.583.109-78.583.369-.001.261 35.182.517 78.582.574C-35.183.426 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath108)" opacity="0.16">
                  <g transform="translate(508.793 130.672)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-35.182-.517-78.582-.573-43.4-.057-78.583.109-78.583.369 0 .261 35.182.517 78.582.574C-35.183.426 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath124)" opacity="0.16">
                  <g transform="translate(434.495 158.534)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-35.182-.517-78.582-.573-43.4-.057-78.583.109-78.583.369-.001.261 35.182.517 78.582.574C-35.183.426 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath140)" opacity="0.16">
                  <g transform="translate(847.776 133.053)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-59.437-.549-132.757-.644-73.32-.095-132.758.039-132.759.3 0 .26 59.437.548 132.757.643C-59.438.394 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath156)" opacity="0.16">
                  <g transform="translate(485.575 112.208)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-72.951-.566-162.941-.683-89.99-.116-162.941 0-162.942.261 0 .26 72.951.566 162.941.682C-72.952.377 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath172)" opacity="0.16">
                  <g transform="translate(589.273 121.408)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.26-42.801-.527-95.599-.596-52.799-.068-95.601.088-95.601.348 0 .261 42.801.527 95.599.596C-42.802.416 0 .26 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath188)" opacity="0.16">
                  <g transform="translate(283.58 129.79)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.326-56.999-.663-127.312-.754-70.312-.092-127.312.098-127.313.424 0 .325 56.999.663 127.312.754C-57.001.515-.001.326 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath204)" opacity="0.16">
                  <g transform="translate(308.342 138.596)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.326-107.587-.729-240.304-.901-132.716-.172-240.305-.047-240.305.278 0 .326 107.587.729 240.304.901C-107.589.45 0 .326 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath220)" opacity="0.16">
                  <g transform="translate(661.173 166.924)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-.379-106.909-.686-238.787-.686S-477.574-.379-477.574 0c0 .379 106.909.686 238.787.686S0 .379 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath236)" opacity="0.8">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath240)" opacity="0.1">
                        <g transform="translate(-32.64 462.64)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0v-9.182c157.994.055 285 2.09 285 4.591C285-2.089 157.994-.055 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath244)" opacity="0.1">
                        <g transform="translate(-4.544 278.082)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0v-3.248c178.506.02 322 .739 322 1.624C322-.739 178.506-.019 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath248)" opacity="0.1">
                        <g transform="translate(-82.64 400.124)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0v-1.586c238.932.009 431 .361 431 .793C431-.361 238.932-.01 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath252)" opacity="0.1">
                        <g transform="translate(918.36 424.488)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0v3.956c-274.965-.024-496-.9-496-1.978C-496 .9-274.965.024 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath256)" opacity="0.1">
                        <g transform="translate(1018.36 392.731)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0v5.448c-274.965-.033-496-1.24-496-2.724C-496 1.24-274.965.033 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath260)" opacity="0.1">
                        <g transform="translate(662.36 347.217)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.489-168.789-.885-377-.885S-754-.489-754 0s168.789.885 377 .885S0 .489 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath264)" opacity="0.1">
                        <g transform="translate(529.36 445.99)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.872-218.037-1.579-487-1.579-268.963 0-487 .707-487 1.579s218.037 1.579 487 1.579C-218.037 1.579 0 .872 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath268)" opacity="0.1">
                        <g transform="translate(878.36 485.04)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.719-168.789-1.302-377-1.302S-754-.719-754 0c0 .719 168.789 1.302 377 1.302S0 .719 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath272)" opacity="0.1">
                        <g transform="translate(1034.36 297.897)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-1.056-142.523-1.911-318.333-1.911-175.811 0-318.334.855-318.334 1.911s142.523 1.911 318.334 1.911C-142.523 1.911 0 1.056 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath276)" opacity="0.1">
                        <g transform="translate(866.36 366.742)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.476-157.148-.863-351-.863S-702-.476-702 0s157.148.863 351 .863S0 .476 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath280)" opacity="0.1">
                        <g transform="translate(360.36 288.642)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.833-112.6-1.507-251.5-1.507S-503-.833-503 0c0 .833 112.6 1.507 251.5 1.507S0 .833 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath284)" opacity="0.1">
                        <g transform="translate(473.027 317.059)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.416-52.383-.754-117-.754-64.617 0-117 .338-117 .754s52.383.754 117 .754C-52.383.754 0 .416 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath288)" opacity="0.1">
                        <g transform="translate(654.201 290.763)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-.416-52.383-.754-117-.754-64.617 0-117 .338-117 .754s52.383.754 117 .754C-52.383.754 0 .416 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath292)" opacity="0.1">
                        <g transform="translate(1076.36 244.424)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c0-2.029-132.076-3.674-295-3.674S-590-2.029-590 0s132.076 3.674 295 3.674S0 2.029 0 0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath472)" opacity="0.2">
                  <g transform="translate(542.419 215.12)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0s8.619 3.559 12.929-2.966c0 0 9.283 1.187 10.277-4.152.995-5.338-7.956-18.386-42.766-8.007 0 0-2.652-8.303-17.239-8.303s-15.25 7.414-15.25 7.414-26.19-11.27-39.782 6.524c0 0-7.293-9.49-24.864-10.38-17.57-.889-22.211 7.118-22.211 7.118s-13.593-5.635-21.881 2.076c-8.288 7.71 4.642 10.973 4.642 10.973s-3.647 10.379 8.951 13.938c12.597 3.559 17.239-4.745 17.239-4.745s2.652 8.304 10.277 5.338c0 0-.995 8.007 8.951 8.007 0 0-4.973 10.084 2.983 17.497 7.957 7.415 32.158 10.677 46.081-5.634 0 0 5.636 6.228 14.256 4.745 8.619-1.483 8.288-9.787 8.288-9.787s14.587 3.856 22.543-5.338c7.956-9.193 2.652-16.607 2.652-16.607S-1.326 11.566 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath488)" opacity="0.2">
                  <g transform="translate(241.441 239.562)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0s8.619 3.559 12.929-2.966c0 0 9.283 1.187 10.277-4.151.995-5.339-7.956-18.387-42.766-8.008 0 0-2.652-8.303-17.239-8.303-14.586 0-15.25 7.414-15.25 7.414s-26.189-11.27-39.782 6.524c0 0-7.293-9.49-24.864-10.38-17.57-.889-22.211 7.118-22.211 7.118s-13.593-5.635-21.881 2.076c-8.288 7.71 4.642 10.973 4.642 10.973s-3.647 10.379 8.951 13.938c12.597 3.559 17.239-4.745 17.239-4.745s2.652 8.304 10.277 5.338c0 0-.995 8.007 8.951 8.007 0 0-4.973 10.083 2.983 17.498 7.957 7.413 32.158 10.676 46.081-5.635 0 0 5.636 6.228 14.256 4.745 8.619-1.483 8.288-9.787 8.288-9.787s14.587 3.856 22.543-5.338c7.956-9.193 2.652-16.607 2.652-16.607S-1.326 11.566 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath504)" opacity="0.2">
                  <g transform="translate(647.866 232.579)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0s8.62 3.559 12.929-2.966c0 0 9.283 1.187 10.277-4.152.995-5.338-7.956-18.386-42.766-8.007 0 0-2.652-8.303-17.239-8.303-14.586 0-15.25 7.414-15.25 7.414s-26.19-11.27-39.782 6.524c0 0-7.293-9.49-24.864-10.38-17.57-.889-22.211 7.118-22.211 7.118s-13.593-5.635-21.881 2.076c-8.288 7.71 4.642 10.973 4.642 10.973s-3.647 10.379 8.951 13.938c12.597 3.559 17.239-4.745 17.239-4.745s2.652 8.304 10.277 5.338c0 0-.995 8.007 8.951 8.007 0 0-4.973 10.084 2.983 17.498 7.957 7.414 32.158 10.676 46.081-5.635 0 0 5.636 6.228 14.256 4.745 8.619-1.483 8.288-9.787 8.288-9.787s14.587 3.856 22.543-5.338c7.956-9.193 2.652-16.607 2.652-16.607S-1.326 11.566 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath520)" opacity="0.2">
                  <g transform="translate(239.76 206.677)">
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0s-6.058 3.904-10.103-1.011c0 0-6.847 2.016-8.25-2.289-1.403-4.304 3.743-16.094 31.236-11.39 0 0 .982-7.164 11.97-8.79 10.989-1.626 12.396 4.432 12.396 4.432s18.35-12.241 30.768.961c0 0 4.332-8.662 17.46-11.357 13.127-2.695 17.604 3.41 17.604 3.41s9.549-6.175 16.737-.722c7.187 5.453-2.154 9.593-2.154 9.593s4.018 8.178-5.036 12.526C103.573-.289 99.06-6.639 99.06-6.639s-.981 7.163-7.088 5.561c0 0 1.729 6.511-5.763 7.62 0 0 4.98 7.785-.106 14.805-5.086 7.019-22.918 12.415-35.404.477 0 0-3.483 5.779-10.158 5.514-6.675-.266-7.441-7.171-7.441-7.171s-10.517 4.815-17.636-1.902c-7.119-6.716-4.031-13.44-4.031-13.44S2.415 9.418 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(629.757 384.468)"
                  : "translate(900 384.468)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-9.703 3.634-15.453 0c-6.786-4.288 1.437-7.873 1.437-7.873s-5.031-6.964 8.266-9.69c13.297-2.725 26.235 5.451 26.235 5.451s3.593-6.056 12.937-6.056 13.657 4.239 13.657 4.239 10.781-6.662 20.484-2.422c0 0-6.828-7.57 8.985-4.845 0 0 8.985-8.782 25.157-6.965 15.421 1.733 15.094 12.415 15.094 12.415s5.462-9.257 20.125-4.845c10.063 3.028 14.016 10.296 14.016 10.296s13.656-5.754 20.125 1.514c6.469 7.267-12.219 11.204-12.219 11.204s8.266 7.267-5.39 12.717c-13.657 5.451-30.907-2.119-30.907-2.119s-4.672 9.084-18.329 3.331c0 0-26.234 24.829-51.391-4.543 0 0-8.985 13.021-20.844.909C31.985 12.718 3.594 22.71 0 0"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(237.808 426.131)"
                  : "translate(-125 426.131)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-7.055 2.547-11.236 0c-4.934-3.006 1.045-5.519 1.045-5.519s-3.659-4.883 6.01-6.793c9.669-1.911 19.076 3.821 19.076 3.821s2.613-4.246 9.407-4.246c6.794 0 9.93 2.972 9.93 2.972s7.84-4.67 14.895-1.698c0 0-4.965-5.307 6.533-3.397 0 0 6.533-6.156 18.292-4.882 11.213 1.214 10.975 8.703 10.975 8.703s3.972-6.489 14.634-3.396c7.317 2.123 10.191 7.217 10.191 7.217s9.93-4.033 14.634 1.062c4.703 5.095-8.885 7.854-8.885 7.854s6.01 5.095-3.92 8.916c-9.93 3.821-22.473-1.486-22.473-1.486s-3.397 6.369-13.327 2.335c0 0-19.076 17.407-37.368-3.184 0 0-6.533 9.128-15.156.637 0 0-20.644 7.005-23.257-8.916"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(107.734 453.932)"
                  : "translate(-20 453.932)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s8.898-2.934 14.171 0c6.222 3.462-1.319 6.357-1.319 6.357s4.614 5.623-7.579 7.823c-12.194 2.201-24.057-4.4-24.057-4.4s-3.296 4.889-11.864 4.889c-8.568 0-12.523-3.423-12.523-3.423s-9.886 5.379-18.784 1.956c0 0 6.261 6.113-8.239 3.912 0 0-8.239 7.09-23.068 5.623-14.141-1.398-13.841-10.024-13.841-10.024s-5.009 7.475-18.455 3.912c-9.227-2.445-12.852-8.312-12.852-8.312s-12.523 4.645-18.455-1.223c-5.932-5.868 11.205-9.046 11.205-9.046s-7.58-5.868 4.943-10.268c12.523-4.401 28.341 1.711 28.341 1.711s4.284-7.335 16.807-2.689c0 0 24.057-20.048 47.125 3.667 0 0 8.239-10.513 19.114-.733 0 0 26.034-8.069 29.33 10.268"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(93.146 377.132)"
                  : "translate(-160 377.132)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-7.048 1.593-12.191-1.433c-5.144-3.026-3.239-5.893-.762-7.007 2.476-1.115 11.048 1.114 11.048 1.114s2.476-3.821 8.001-3.662c5.524.159 6.667 2.548 6.667 2.548s6.286-6.529 21.144-6.37c14.859.159 19.621 6.529 19.621 6.529s2.476-2.707 8-2.389c5.525.319 8.763 4.3 8.763 4.3s.191-2.707 3.048-3.026c2.857-.318 4.953 1.911 4.953 1.911s4.381-5.414 18.858-4.299c14.478 1.114 20.192 6.21 20.192 6.21s7.048-.796 7.429 2.867C125.152.956 120.39.478 120.39.478s-4.191 10.829-16.763 3.185c0 0 .19 5.892-9.525 5.096 0 0-4.762 12.262-26.859 6.21 0 0-3.048 10.033-17.525 11.944-14.477 1.911-17.716-8.281-17.716-8.281s-5.143 2.07-8 .478c-2.857-1.593-.572-3.344-.572-3.344s-6.667.477-10.477-1.752c-3.81-2.229-2.476-6.211-2.476-6.211S-.762 9.396 0 0"
              ></path>
            </g>
            <g transform="translate(385.771 185.462)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-1.637 2.002-2.496 2.73c-.859.728-2.879 4.004-3.28 5.46-.4 1.456-1.459 2.912-2.318 3.64-.859.728-7.341 7.645-7.341 7.645s-4.442-4.187-5.147-5.097c-.704-.91-8.384-7.462-8.745-7.826-.361-.364-1.804-1.82-2.114-2.73-.309-.91-2.291-3.64-2.669-3.822-.378-.182-3.098-3.458-3.608-3.64-.51-.182-5.044-3.458-5.044-3.458l-3.078-4.004h58.146z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath556)" opacity="0.06">
                  <g transform="translate(369.594 177.272)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-.36 3.822.809 3.64-2.228 8.372 2.718 7.827-.197 4.004s-4.442-4.186-5.146-5.096c-.705-.91-8.385-7.463-8.746-7.827-.361-.364-1.804-1.82-2.113-2.73-.31-.91-2.292-3.64-2.67-3.822-.378-.182-3.098-3.458-3.608-3.64-.51-.182-5.044-3.458-5.044-3.458l-3.077-4.004H.474z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(661.709 251.203)">
              <path
                fill={state === "day" ? "#53a9cc" : "#3e6271"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-5.692 7.621-8.677 10.392c-2.986 2.771-10.011 15.241-11.403 20.783-1.392 5.542-5.074 11.084-8.059 13.855-2.986 2.771-25.523 29.097-25.523 29.097s-15.445-15.934-17.894-19.398c-2.449-3.464-29.151-28.404-30.406-29.789-1.254-1.386-6.272-6.928-7.348-10.392-1.076-3.464-7.966-13.855-9.28-14.548-1.314-.693-10.773-13.163-12.545-13.855-1.772-.693-17.537-13.163-17.537-13.163l-10.698-15.241H42.785z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath576)" opacity="0.06">
                  <g transform="translate(605.465 220.029)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-1.251 14.548 2.812 13.856-7.744 31.867 9.447 29.79-.683 15.24s-15.444-15.933-17.894-19.397C-17.762 82.44-44.464 57.5-45.718 56.115c-1.255-1.386-6.273-6.928-7.349-10.392-1.075-3.464-7.966-13.855-9.28-14.548-1.314-.693-10.773-13.163-12.545-13.856-1.772-.692-17.536-13.162-17.536-13.162l-10.699-15.241H1.649z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(472.415 191.605)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-4.906 3.365-7.48 4.588c-2.573 1.224-8.628 6.73-9.828 9.177-1.2 2.447-4.374 4.894-6.947 6.117-2.574 1.224-22 12.848-22 12.848s-13.312-7.036-15.424-8.565c-2.111-1.53-25.127-12.541-26.208-13.153-1.082-.612-5.407-3.059-6.334-4.588-.927-1.53-6.867-6.118-7.999-6.424-1.133-.306-9.286-5.812-10.814-6.118-1.527-.306-15.116-5.812-15.116-5.812l-9.222-6.729H36.879z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath596)" opacity="0.06">
                  <g transform="translate(423.935 177.84)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-1.078 6.424 2.423 6.117-6.675 14.071 8.144 13.153-.589 6.729s-13.313-7.035-15.424-8.564c-2.111-1.53-25.127-12.542-26.209-13.153-1.081-.612-5.406-3.059-6.333-4.589-.928-1.529-6.867-6.117-8-6.423-1.132-.306-9.285-5.812-10.813-6.118-1.527-.306-15.116-5.812-15.116-5.812l-9.222-6.729H1.422z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(771.886 216.322)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.214 1.058-12.395 22.217-12.395 22.217s-29.198 55.012-32.775 56.07c-3.577 1.058-8.668 11.637-12.404 17.985-3.736 6.348-34.18 64.534-34.18 64.534l-25.416-37.028s-16.845-23.274-20.263-27.506c-3.418-4.232-18.708-23.275-20.258-30.68-1.55-7.406-35.648-30.68-35.648-30.68s-15.053-25.391-16.594-28.564c-1.541-3.174-10.768-13.754-12.99-16.927-2.223-3.174-11.831-32.796-11.831-32.796H28.03S2.214-1.058 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath616)" opacity="0.06">
                  <g transform="translate(635.817 204.684)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l21.135 16.927 18.408 39.144-8.863 22.216 17.044 43.376-8.717 23.654 5.309 27.127-25.417-37.028S2.054 112.141-1.364 107.91c-3.418-4.232-18.707-23.275-20.257-30.681-1.55-7.405-35.648-30.68-35.648-30.68s-15.054-25.39-16.595-28.564c-1.541-3.174-10.767-13.753-12.99-16.927-2.223-3.174-11.831-32.796-11.831-32.796H4.87z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(607.88 180.26)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-4.473 3.918-5.127 5.224c-.654 1.306-5.092 6.269-7.076 6.792-1.984.522-12.275 5.485-13.815 6.269-1.541.783-15.97 20.113-15.97 20.113l-18.147 13.061s-7.09 4.702-8.99 5.485c-1.899.784-4.704 6.531-5.97 7.053-1.266.522-22.229 21.942-22.229 21.942l-12.511-11.755s-12.313-12.538-13.897-14.105c-1.584-1.567-9.206-6.269-11.677-8.359s-11.952-8.098-13.282-8.881c-1.33-.784-24.417-31.084-24.417-31.084s-11-6.27-12.415-7.314c-1.415-1.045-6.123-3.396-7.897-4.441s-10.621-7.314-10.621-7.314H7.68z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath636)" opacity="0.06">
                  <g transform="translate(511.346 178.432)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-9.689 10.71 4.665 13.06-.359 9.926-8.612 19.33 7.536 8.359 5.741 11.754-1.076 8.882 1.003 5.746-12.511-11.754s-12.313-12.538-13.897-14.106c-1.584-1.567-9.206-6.269-11.677-8.359-2.471-2.089-11.952-8.097-13.282-8.881-1.33-.783-24.417-31.084-24.417-31.084S-87.576 7.314-88.99 6.269c-1.415-1.045-6.124-3.396-7.897-4.441-1.774-1.044-10.622-7.314-10.622-7.314H.58z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(206.348 237.505)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-5.739 9.748-8.749 13.293c-3.01 3.545-10.093 19.497-11.496 26.587-1.404 7.089-5.116 14.179-8.126 17.724-3.011 3.545-25.733 37.221-25.733 37.221s-15.572-20.383-18.042-24.814c-2.469-4.431-29.391-36.335-30.656-38.107-1.265-1.773-6.324-8.862-7.409-13.293-1.084-4.432-8.031-17.725-9.356-18.611-1.325-.886-10.862-16.838-12.649-17.724-1.786-.886-17.681-16.838-17.681-16.838l-10.787-19.497H43.138z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath656)" opacity="0.06">
                  <g transform="translate(149.642 197.625)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-1.261 18.61 2.835 17.725L-6.234 77.1l9.525 38.108-.688 19.496s-15.572-20.383-18.042-24.814c-2.469-4.431-29.391-36.334-30.656-38.107-1.265-1.772-6.324-8.862-7.409-13.293-1.084-4.431-8.031-17.724-9.356-18.611-1.325-.886-10.862-16.838-12.649-17.724-1.786-.886-17.681-16.838-17.681-16.838l-10.787-19.496H1.663z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(291.078 199.917)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-3.211 4.717-4.895 6.432c-1.684 1.716-5.646 9.434-6.432 12.865-.785 3.43-2.862 6.861-4.546 8.576-1.684 1.716-14.397 18.011-14.397 18.011s-8.711-9.863-10.093-12.007c-1.382-2.144-16.444-17.582-17.151-18.44-.708-.857-3.538-4.288-4.145-6.432C-62.266 6.861-66.153.429-66.894 0c-.741-.429-6.077-8.148-7.076-8.576-1-.429-9.892-8.148-9.892-8.148l-6.035-9.434H24.134z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath676)" opacity="0.06">
                  <g transform="translate(241.847 197.083)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l16.173 15.322 3.122 8.229-4.824 6.526 4.876 9.206-.385 9.434S10.25 38.854 8.868 36.71C7.486 34.566-7.575 19.128-8.283 18.271c-.708-.858-3.538-4.289-4.145-6.433-.607-2.144-4.494-8.576-5.235-9.005-.741-.429-6.077-8.147-7.076-8.576-1-.429-9.892-8.148-9.892-8.148l-6.035-9.434h59.102z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(256.77 204.617)">
              <path
                fill={state === "day" ? "#53a9cc" : "#3e6271"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-4.451 5.711-6.786 7.788c-2.334 2.077-7.828 11.422-8.917 15.576-1.088 4.154-3.968 8.307-6.302 10.384-2.335 2.077-19.959 21.807-19.959 21.807s-12.078-11.942-13.993-14.538c-1.916-2.596-22.796-21.287-23.777-22.326-.981-1.038-4.905-5.192-5.747-7.788C-86.322 8.307-91.71.519-92.738 0c-1.027-.519-8.424-9.865-9.81-10.384-1.386-.519-13.714-9.865-13.714-9.865l-8.366-11.422H33.458z"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath696)" opacity="0.06">
                  <g transform="translate(217.16 193.395)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-3.121 6.242L.284 21.565l-8.229 11.917 6.125 21.873-.534 11.422S-14.432 54.836-16.347 52.24c-1.916-2.596-22.796-21.288-23.777-22.326-.981-1.038-4.906-5.192-5.747-7.788-.841-2.596-6.229-10.384-7.257-10.903-1.028-.519-8.424-9.865-9.81-10.384-1.386-.519-13.714-9.865-13.714-9.865l-8.366-11.423h81.935z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(165.328 212.393)">
              <path
                fill={state === "day" ? "#58aacc" : "#457284"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.306.962-12.915 20.204-12.915 20.204s-30.425 50.03-34.153 50.992c-3.727.962-9.032 10.583-12.925 16.356-3.893 5.772-35.616 58.688-35.616 58.688l-26.484-33.673s-17.552-21.167-21.114-25.015c-3.561-3.849-19.494-21.167-21.109-27.901-1.615-6.735-37.146-27.901-37.146-27.901s-15.686-23.091-17.291-25.977c-1.606-2.887-11.22-12.508-13.536-15.394-2.316-2.886-12.328-29.825-12.328-29.825H29.208S2.307-.962 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath716)" opacity="0.06">
                  <g transform="translate(23.542 201.81)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l22.023 15.394 19.181 35.598-9.235 20.204 17.76 39.446-9.083 21.512 5.531 24.669-26.484-33.673S2.141 101.983-1.421 98.135c-3.561-3.848-19.494-21.166-21.109-27.901-1.615-6.735-37.146-27.901-37.146-27.901s-15.686-23.091-17.291-25.977C-78.573 13.47-88.187 3.848-90.503.962c-2.316-2.886-12.328-29.825-12.328-29.825H5.074z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(348.594 179.243)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.863 1.399-9.316 11.194-10.248 12.594-.932 1.399-6.056 2.449-8.385 3.498-2.329 1.05-7.919 7.696-8.85 9.095-.932 1.4-14.441 7.697-14.441 7.697l-16.304 11.369s-13.974-12.419-16.769-14.168c-2.795-1.749-6.522-3.848-8.385-5.947-1.863-2.099-16.77-9.795-18.167-10.495-1.398-.699-2.329-3.148-2.795-4.198-.466-1.049-14.441-5.947-16.304-6.996-1.863-1.05-5.124-3.149-6.521-3.848-1.398-.7-14.907-4.898-14.907-4.898H7.919S1.863-1.399 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath736)" opacity="0.08">
                  <g transform="translate(303.876 185.89)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-10.248 10.495-2.795 6.996 4.192 8.746-4.658 11.369s-13.974-12.419-16.769-14.168c-2.795-1.749-6.522-3.848-8.385-5.947-1.864-2.099-16.77-9.795-18.167-10.494-1.398-.7-2.329-3.149-2.795-4.198-.466-1.05-14.441-5.947-16.304-6.997-1.863-1.049-5.124-3.148-6.521-3.848-1.398-.7-14.907-4.897-14.907-4.897h81.447z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(643.65 183.05)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.393 1.757-12.312 10.982-16.569 14.496-4.257 3.514-4.429 7.907-8.336 9.225-3.906 1.318-11.474 5.711-16.329 9.664-4.855 3.954-12.768 10.543-14.034 11.861-1.266 1.318-14.144 9.225-14.144 9.225s-13.354-12.3-17.477-16.254c-4.122-3.953-17.4-10.103-19.69-12.3-2.291-2.196-17.121-11.86-18.953-13.617-1.832-1.757-4.581-4.393-5.287-6.589-.706-2.197-21.243-15.815-21.243-15.815H9.532S2.392-1.757 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath756)" opacity="0.08">
                  <g transform="translate(558.099 172.946)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l19.859 11.421-5.13 12.3L27.485 36.46l-6.471 7.468.502 10.103-5.449 10.477c-1-.921-13.449-12.393-17.405-16.187-4.122-3.954-17.4-10.104-19.69-12.3-2.291-2.196-17.121-11.861-18.953-13.618-1.832-1.757-4.581-4.393-5.287-6.589C-45.974 13.618-66.511 0-66.511 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(756.153 194.315)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.445 1.425-5.78 6.055-7.707 7.835-1.926 1.781-24.565 20.657-28.9 22.438-4.335 1.781-26.492 29.204-26.492 29.204S-79.475 46.3-83.329 42.738c-3.853-3.562-11.078-6.767-12.523-8.547-1.445-1.781-15.895-14.603-19.267-16.383-3.371-1.781-12.042-9.26-13.487-11.397-1.445-2.137-25.528-11.397-27.455-12.465-1.926-1.069-19.748-14.246-21.675-15.315H33.235S1.445-1.424 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath776)" opacity="0.08">
                  <g transform="translate(689.707 172.946)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-12.549 16.027 4.335 6.054-7.706 11.041 14.931 9.26 10.597 13.89-7.707 12.821 1.445 11.753s-16.376-13.177-20.23-16.739c-3.853-3.562-11.078-6.767-12.523-8.548-1.445-1.78-15.895-14.602-19.267-16.383-3.371-1.78-12.042-9.259-13.487-11.396-1.445-2.137-25.528-11.397-27.455-12.466C-91.542 14.246-109.364 1.068-111.291 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(534.246 184.167)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.953.748-3.814 3.179-5.086 4.114-1.271.935-16.21 10.847-19.07 11.782-2.861.935-17.482 15.335-17.482 15.335s-10.807-6.92-13.35-8.79c-2.542-1.87-7.31-3.553-8.263-4.488-.954-.935-10.49-7.667-12.714-8.602-2.225-.935-7.946-4.863-8.9-5.985-.954-1.122-16.846-5.984-18.117-6.545-1.272-.561-13.032-7.481-14.303-8.042H21.932S.954-.748 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath796)" opacity="0.08">
                  <g transform="translate(490.4 172.946)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-8.281 8.415 2.861 3.18-5.086 5.797 9.854 4.862 6.992 7.294-5.085 6.732.953 6.171s-10.807-6.919-13.35-8.789c-2.542-1.87-7.31-3.553-8.263-4.488-.954-.936-10.49-7.668-12.714-8.603-2.225-.935-7.946-4.862-8.9-5.984-.954-1.122-16.846-5.984-18.117-6.546C-60.408 7.48-72.168.561-73.439 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(134.67 195.344)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.049 1.493-4.197 6.346-5.596 8.212-1.399 1.867-17.839 21.651-20.987 23.517-3.148 1.867-19.237 30.61-19.237 30.61s-11.892-13.812-14.691-17.544c-2.798-3.733-8.044-7.093-9.094-8.959-1.049-1.867-11.542-15.305-13.991-17.172-2.448-1.866-8.744-9.705-9.793-11.945-1.05-2.24-18.538-11.945-19.937-13.065-1.4-1.12-14.341-14.932-15.74-16.051h153.2S1.049-1.493 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath816)" opacity="0.08">
                  <g transform="translate(86.419 172.946)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-9.113 16.798 3.148 6.346-5.596 11.572 10.843 9.705L6.977 58.98 1.381 72.418 2.43 84.737S-9.462 70.925-12.26 67.192c-2.799-3.733-8.045-7.093-9.095-8.959-1.049-1.866-11.542-15.305-13.99-17.171-2.449-1.867-8.745-9.706-9.794-11.945-1.049-2.24-18.538-11.946-19.937-13.066C-66.475 14.932-79.417 1.12-80.816 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(97.082 181.974)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.969 1.57-10.131 9.813-13.634 12.953-3.503 3.14-3.645 7.065-6.859 8.242-3.215 1.178-9.443 5.103-13.437 8.635-3.995 3.533-10.506 9.42-11.548 10.598-1.042 1.177-11.639 8.243-11.639 8.243S-68.106 37.68-71.498 34.148c-3.392-3.533-14.318-9.028-16.203-10.99-1.885-1.963-14.088-10.598-15.596-12.168-1.507-1.57-3.769-3.925-4.35-5.888-.581-1.962-17.48-14.13-17.48-14.13H7.843S1.969-1.57 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath836)" opacity="0.08">
                  <g transform="translate(26.685 172.946)">
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l16.341 10.205-4.221 10.99 10.497 11.383-5.325 6.672.413 9.028-4.484 9.361c-.823-.823-11.067-11.074-14.322-14.463-3.392-3.533-14.318-9.028-16.203-10.991-1.884-1.962-14.087-10.597-15.595-12.167-1.508-1.57-3.77-3.925-4.35-5.888C-37.831 12.168-54.73 0-54.73 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(215.555 187.26)">
              <path
                fill="#5894b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.481.954-5.923 4.056-7.898 5.248-1.974 1.193-25.173 13.837-29.616 15.03-4.442 1.193-27.148 19.562-27.148 19.562s-16.782-8.827-20.731-11.213c-3.949-2.385-11.353-4.532-12.834-5.725-1.48-1.193-16.289-9.781-19.744-10.974-3.455-1.193-12.34-6.202-13.821-7.634-1.48-1.431-26.16-7.634-28.135-8.35-1.974-.715-20.238-9.542-22.212-10.258H34.058S1.481-.954 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath856)"
                  opacity={state === "day" ? "0.08" : "0"}
                >
                  <g
                    transform={
                      state === "day"
                        ? "translate(147.464 172.946)}"
                        : "translate(147.464 0)"
                    }
                  >
                    <path
                      fill="#000"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-12.86 10.735 4.443 4.056-7.898 7.395 15.302 6.203 10.859 9.304-7.898 8.588 1.481 7.873s-16.782-8.827-20.731-11.213c-3.949-2.385-11.353-4.532-12.834-5.725-1.48-1.193-16.288-9.781-19.744-10.974-3.455-1.193-12.34-6.203-13.821-7.634-1.48-1.432-26.16-7.634-28.135-8.35C-93.81 9.542-112.074.716-114.048 0z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath872)"
                  opacity={state === "day" ? "0.1" : "0"}
                >
                  <g
                    transform={
                      state === "day"
                        ? "translate(571.236 381.659)"
                        : "translate(571.236 300)"
                    }
                  >
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-38.956-31.58-70.536-70.536-70.536S-141.072-38.956-141.072 0s31.58 70.536 70.536 70.536S0 38.956 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath888)"
                  opacity={state === "day" ? "0.1" : "0"}
                >
                  <g
                    transform={
                      state === "day"
                        ? "translate(556.093 381.659)"
                        : "translate(556.093 300)"
                    }
                  >
                    <path
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-30.593-24.801-55.394-55.394-55.394S-110.787-30.593-110.787 0s24.8 55.393 55.393 55.393S0 30.593 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g
              opacity={state === "day" ? "1" : "0"}
              transform={
                state === "day"
                  ? "translate(543.249 381.659)"
                  : "translate(543.249 300)"
              }
            >
              <path
                fill="#fff1b1"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c0-23.499-19.05-42.549-42.549-42.549S-85.098-23.499-85.098 0s19.05 42.549 42.549 42.549S0 23.499 0 0"
              ></path>
            </g>
            <g
              opacity={state === "day" ? "1" : "0"}
              transform={
                state === "day"
                  ? "translate(540.435 381.659)"
                  : "translate(540.435 300)"
              }
            >
              <path
                fill={state === "day" ? "#ffe568" : "#5f5732"}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c0-21.945-17.79-39.735-39.735-39.735S-79.47-21.945-79.47 0s17.79 39.735 39.735 39.735S0 21.945 0 0"
              ></path>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath912)"
                  opacity={state === "day" ? "0.8" : "0"}
                >
                  <g transform="translate(508.833 400.567)">
                    <path
                      fill="#ffefa6"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c0-7.894-6.399-14.293-14.293-14.293-7.893 0-14.292 6.399-14.292 14.293 0 7.894 6.399 14.293 14.292 14.293C-6.399 14.293 0 7.894 0 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath928)"
                  opacity={state === "day" ? "0.8" : "0"}
                >
                  <g transform="translate(492.946 375.452)">
                    <path
                      fill="#ffefa6"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0a6.504 6.504 0 10-13.008 0A6.504 6.504 0 000 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g
                  clipPath="url(#clipPath944)"
                  opacity={state === "day" ? "0.8" : "0"}
                >
                  <g transform="translate(475.797 386.243)">
                    <path
                      fill="#ffefa6"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0a3.255 3.255 0 10-6.511 0A3.255 3.255 0 000 0"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(475.63 365.476)"
                  : "translate(900 365.476)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s4.098 1.692 6.148-1.41c0 0 4.413.564 4.886-1.974.473-2.539-3.783-8.743-20.334-3.808 0 0-1.261-3.948-8.197-3.948-6.936 0-7.251 3.525-7.251 3.525s-12.453-5.358-18.916 3.103c0 0-3.468-4.513-11.822-4.936-8.355-.423-10.562 3.384-10.562 3.384s-6.463-2.679-10.403.988C-80.392-1.41-74.245.141-74.245.141s-1.734 4.935 4.256 6.627c5.99 1.693 8.197-2.256 8.197-2.256s1.261 3.949 4.887 2.539c0 0-.473 3.807 4.256 3.807 0 0-2.365 4.794 1.419 8.319 3.783 3.526 15.29 5.077 21.91-2.679 0 0 2.68 2.962 6.779 2.256 4.098-.705 3.94-4.653 3.94-4.653s6.936 1.833 10.719-2.538c3.784-4.372 1.261-7.897 1.261-7.897S-.631 5.499 0 0"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(334.69 450.268)"
                  : "translate(334.69 550)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-3.56 1.005-5.34-.838c0 0-3.833.335-4.244-1.172-.411-1.508 3.286-5.193 17.662-2.262 0 0 1.095-2.345 7.119-2.345s6.298 2.094 6.298 2.094S32.311-7.706 37.924-2.68c0 0 3.012-2.681 10.269-2.932 7.256-.251 9.173 2.01 9.173 2.01s5.613-1.591 9.036.587C69.825-.838 64.485.084 64.485.084s1.506 2.931-3.696 3.936c-5.203 1.006-7.12-1.34-7.12-1.34s-1.095 2.346-4.244 1.508c0 0 .411 2.261-3.697 2.261 0 0 2.054 2.848-1.232 4.942-3.286 2.094-13.28 3.016-19.031-1.591 0 0-2.327 1.759-5.887 1.34-3.559-.419-3.422-2.764-3.422-2.764s-6.025 1.089-9.31-1.508C3.56 4.272 5.75 2.178 5.75 2.178S.548 3.267 0 0"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(574.915 452.413)"
                  : "translate(900.915 452.413)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-6.005 2.22-9.007-1.85c0 0-6.467.74-7.16-2.59-.692-3.33 5.543-11.47 29.793-4.995 0 0 1.848-5.181 12.01-5.181 10.161 0 10.623 4.626 10.623 4.626s18.246-7.031 27.715 4.07c0 0 5.081-5.92 17.321-6.475 12.241-.555 15.474 4.44 15.474 4.44s9.469-3.515 15.243 1.295c5.774 4.81-3.234 6.845-3.234 6.845s2.541 6.475-6.235 8.695c-8.777 2.22-12.01-2.96-12.01-2.96s-1.848 5.18-7.159 3.33c0 0 .693 4.996-6.236 4.996 0 0 3.464 6.29-2.079 10.915-5.543 4.625-22.402 6.66-32.102-3.515 0 0-3.926 3.885-9.931 2.96-6.005-.925-5.774-6.105-5.774-6.105s-10.162 2.405-15.704-3.33C6.005 9.435 9.7 4.81 9.7 4.81S.924 7.215 0 0"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(196.87 344.706)"
                  : "translate(-100 344.706)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-3.396 1.201-5.094-1.001c0 0-3.657.4-4.049-1.402-.391-1.802 3.135-6.206 16.849-2.703 0 0 1.045-2.803 6.791-2.803 5.747 0 6.008 2.503 6.008 2.503S30.824-9.21 36.178-3.203c0 0 2.874-3.204 9.796-3.504 6.922-.301 8.751 2.402 8.751 2.402s5.355-1.902 8.62.701C66.61-1.001 61.516.1 61.516.1s1.437 3.504-3.526 4.705c-4.963 1.202-6.792-1.602-6.792-1.602s-1.044 2.804-4.048 1.802c0 0 .391 2.703-3.527 2.703 0 0 1.959 3.404-1.175 5.907-3.135 2.502-12.669 3.604-18.155-1.902 0 0-2.22 2.102-5.616 1.601-3.396-.5-3.265-3.303-3.265-3.303S9.665 11.312 6.53 8.209C3.396 5.105 5.486 2.603 5.486 2.603S.522 3.904 0 0"
              ></path>
            </g>
            <g
              transform={
                state === "day"
                  ? "translate(527.617 398.79)"
                  : "translate(800 398.79)"
              }
            >
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-4.066 1.352-5.545-.247C-7.024-1.846-4.19-3.043-4.19-3.043s-2.143-3.091 1.849-4.538c4.436-1.608 8.256-.723 8.256-.723s.616-4.383 8.256-4.609c7.64-.226 11.214 3.839 11.214 3.839s2.341-3.235 8.133-2.808c5.792.426 6.531 3.693 6.531 3.693s5.299-.036 5.176 4.179C45.101.206 39.679-.477 39.679-.477s-.862 3.258-4.805 4.49c-3.944 1.231-7.148-1.201-7.148-1.201s-2.464 3.145-4.929 3.875c-2.464.73-3.204-1.277-3.204-1.277s-4.295 3.342-9.858 1.975c-4.806-1.18-4.313-4.287-4.313-4.287S-.246 4.651 0 0"
              ></path>
            </g>
            <g transform="translate(242.85 181.712)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.105-.088.432-.164.432-.164C.07.24-.257.991-.257.991-.14.852.296.73.296.73c-.433.441-.756 1.137-.756 1.137.164-.139.538-.202.538-.202-.69.618-1.035 1.264-1.035 1.264.14-.101.568-.139.568-.139-.517.39-.68 1.135-.68 1.135.117-.076.55-.101.55-.101-.316.252-.874.977-.874.977l.584-.139c-.584.416-.755.95-.755.95l.292-.063c-.316.239-.586 1.072-.586 1.072l.198-.088c-.373.58-.572 1.551-.572 1.551s-.198-.971-.572-1.551l.198.088s-.27-.833-.586-1.072l.292.063s-.171-.534-.755-.95l.584.139s-.558-.725-.874-.977c0 0 .433.025.55.101 0 0-.163-.745-.68-1.135 0 0 .428.038.568.139 0 0-.345-.646-1.035-1.264 0 0 .374.063.538.202 0 0-.323-.696-.756-1.137 0 0 .436.122.553.261 0 0-.327-.751-.689-1.155 0 0 .327.076.432.164 0 0-.479-.794-.794-1.059 0 0 .932-.359 3.026-.359s3.027.359 3.027.359C.479-.794 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(184.85 186.162)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.118-.113.485-.209.485-.209-.406.514-.773 1.471-.773 1.471.131-.177.62-.332.62-.332-.485.562-.848 1.448-.848 1.448.184-.177.603-.257.603-.257-.773.787-1.161 1.61-1.161 1.61.158-.128.637-.176.637-.176-.58.497-.762 1.446-.762 1.446.131-.097.616-.129.616-.129-.354.321-.98 1.245-.98 1.245l.655-.177a2.658 2.658 0 00-.847 1.21l.328-.081c-.354.306-.658 1.366-.658 1.366l.223-.112c-.419.739-.642 1.976-.642 1.976s-.223-1.237-.642-1.976l.222.112s-.303-1.06-.657-1.366l.328.081s-.192-.68-.848-1.21l.656.177s-.627-.924-.981-1.245c0 0 .486.032.617.129 0 0-.182-.949-.763-1.446 0 0 .48.048.637.176 0 0-.387-.823-1.161-1.61 0 0 .42.08.604.257 0 0-.363-.886-.848-1.448 0 0 .489.155.62.332 0 0-.367-.957-.773-1.471 0 0 .367.096.485.209 0 0-.538-1.012-.892-1.35 0 0 1.047-.457 3.396-.457S.892-1.35.892-1.35C.538-1.012 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(193.794 188.132)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.118-.112.485-.209.485-.209-.406.514-.773 1.471-.773 1.471.131-.177.62-.332.62-.332-.485.563-.848 1.448-.848 1.448.184-.177.603-.257.603-.257-.773.787-1.161 1.61-1.161 1.61.158-.128.637-.176.637-.176-.58.497-.762 1.446-.762 1.446.131-.097.616-.129.616-.129-.354.322-.98 1.245-.98 1.245l.655-.177a2.658 2.658 0 00-.847 1.21l.328-.08c-.354.305-.658 1.365-.658 1.365l.223-.112c-.419.739-.642 1.976-.642 1.976s-.223-1.237-.642-1.976l.223.112s-.304-1.06-.658-1.365l.328.08s-.192-.68-.848-1.21l.656.177s-.627-.923-.981-1.245c0 0 .486.032.617.129 0 0-.183-.949-.763-1.446 0 0 .48.048.637.176 0 0-.387-.823-1.16-1.61 0 0 .419.08.603.257 0 0-.363-.885-.848-1.448 0 0 .489.155.62.332 0 0-.367-.957-.773-1.471 0 0 .367.097.485.209 0 0-.538-1.012-.892-1.35 0 0 1.047-.457 3.396-.457S.892-1.35.892-1.35C.538-1.012 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(245.771 182.518)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.105-.103.432-.192.432-.192-.362.472-.689 1.35-.689 1.35C-.14.996.296.854.296.854c-.433.515-.756 1.328-.756 1.328.164-.162.538-.236.538-.236-.69.722-1.035 1.478-1.035 1.478.14-.118.568-.163.568-.163-.517.457-.68 1.327-.68 1.327.117-.088.55-.118.55-.118-.316.295-.874 1.142-.874 1.142l.584-.162a2.444 2.444 0 00-.755 1.11l.292-.074c-.316.281-.586 1.254-.586 1.254l.198-.104c-.373.678-.572 1.814-.572 1.814s-.198-1.136-.572-1.814l.198.104s-.27-.973-.586-1.254l.292.074s-.171-.624-.755-1.11l.584.162s-.558-.847-.874-1.142c0 0 .433.03.55.118 0 0-.163-.87-.68-1.327 0 0 .428.045.568.163 0 0-.345-.756-1.035-1.478 0 0 .374.074.538.236 0 0-.323-.813-.756-1.328 0 0 .436.142.553.304 0 0-.327-.878-.689-1.35 0 0 .327.089.432.192 0 0-.479-.929-.795-1.238 0 0 .933-.42 3.027-.42 2.094 0 3.027.42 3.027.42C.479-.929 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(297.853 182.741)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.105-.103.432-.192.432-.192-.362.472-.689 1.35-.689 1.35C-.14.996.296.853.296.853c-.433.516-.756 1.329-.756 1.329.164-.162.538-.236.538-.236-.69.722-1.035 1.478-1.035 1.478.14-.118.568-.162.568-.162-.517.456-.68 1.326-.68 1.326.117-.088.55-.118.55-.118-.316.295-.874 1.142-.874 1.142l.584-.162a2.444 2.444 0 00-.755 1.11l.292-.074c-.316.281-.586 1.254-.586 1.254l.198-.104c-.374.678-.572 1.814-.572 1.814s-.199-1.136-.572-1.814l.198.104s-.27-.973-.586-1.254l.292.074s-.171-.624-.755-1.11l.584.162s-.558-.847-.874-1.142c0 0 .433.03.55.118 0 0-.163-.87-.68-1.326 0 0 .428.044.568.162 0 0-.345-.756-1.035-1.478 0 0 .374.074.538.236 0 0-.323-.813-.756-1.329 0 0 .436.143.553.305 0 0-.327-.878-.689-1.35 0 0 .327.089.432.192 0 0-.479-.929-.795-1.238 0 0 .933-.42 3.027-.42 2.094 0 3.027.42 3.027.42C.479-.929 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(303.974 179.613)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.087-.085.358-.158.358-.158-.3.39-.57 1.116-.57 1.116C-.116.824.245.706.245.706c-.358.427-.625 1.098-.625 1.098.135-.134.444-.195.444-.195a4.995 4.995 0 00-.855 1.222c.116-.097.469-.134.469-.134-.427.378-.562 1.097-.562 1.097.097-.073.454-.097.454-.097-.26.244-.722.944-.722.944l.483-.134c-.483.402-.625.918-.625.918l.242-.061c-.261.232-.485 1.036-.485 1.036l.165-.085c-.31.561-.474 1.499-.474 1.499s-.164-.938-.473-1.499l.164.085s-.223-.804-.484-1.036l.241.061s-.141-.516-.624-.918l.483.134s-.462-.7-.723-.944c0 0 .358.024.454.097 0 0-.134-.719-.562-1.097 0 0 .354.037.47.134 0 0-.285-.624-.856-1.222 0 0 .309.061.445.195 0 0-.267-.671-.625-1.098 0 0 .36.118.457.252 0 0-.27-.726-.57-1.116 0 0 .271.073.358.158 0 0-.397-.768-.657-1.024 0 0 .771-.347 2.502-.347 1.732 0 2.503.347 2.503.347C.396-.768 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(279.457 186.225)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.087-.085.358-.158.358-.158-.3.39-.57 1.116-.57 1.116C-.116.824.245.706.245.706c-.358.426-.625 1.098-.625 1.098.135-.134.444-.195.444-.195a4.995 4.995 0 00-.855 1.222c.116-.097.469-.134.469-.134-.427.377-.562 1.097-.562 1.097.097-.073.455-.097.455-.097-.261.243-.723.944-.723.944l.483-.134c-.483.402-.624.918-.624.918l.241-.061c-.261.232-.485 1.036-.485 1.036l.165-.085c-.31.561-.474 1.499-.474 1.499s-.164-.938-.473-1.499l.164.085s-.223-.804-.484-1.036l.241.061s-.141-.516-.624-.918l.483.134s-.462-.701-.723-.944c0 0 .358.024.454.097 0 0-.134-.72-.561-1.097 0 0 .353.037.469.134 0 0-.285-.624-.856-1.222 0 0 .31.061.445.195 0 0-.267-.672-.625-1.098 0 0 .36.118.457.252 0 0-.27-.726-.57-1.116 0 0 .271.073.358.158 0 0-.397-.768-.657-1.024 0 0 .771-.347 2.502-.347 1.732 0 2.503.347 2.503.347C.396-.768 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(294.288 183.29)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.078-.076.32-.142.32-.142-.268.349-.51.999-.51.999.086-.12.409-.225.409-.225-.32.382-.559.983-.559.983.121-.12.398-.174.398-.174-.511.535-.766 1.094-.766 1.094.103-.087.42-.12.42-.12-.383.338-.503.982-.503.982.086-.065.407-.087.407-.087-.234.218-.648.845-.648.845l.433-.12c-.433.36-.559.822-.559.822l.216-.054c-.233.207-.434.927-.434.927l.147-.076c-.277.502-.423 1.343-.423 1.343s-.147-.841-.424-1.343l.147.076s-.201-.72-.434-.927l.216.054s-.126-.462-.559-.822l.433.12s-.414-.627-.648-.845c0 0 .321.022.407.087 0 0-.12-.644-.503-.982 0 0 .317.033.42.12 0 0-.255-.559-.766-1.094 0 0 .277.054.398.174 0 0-.239-.601-.559-.983 0 0 .323.105.409.225 0 0-.242-.65-.51-.999 0 0 .242.066.32.142 0 0-.355-.688-.588-.917 0 0 .69-.31 2.241-.31 1.55 0 2.24.31 2.24.31C.355-.688 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(282.563 185.958)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.067-.066.276-.122.276-.122-.231.301-.44.862-.44.862C-.089.636.189.546.189.546c-.276.329-.483.849-.483.849.105-.104.344-.151.344-.151-.441.461-.662.944-.662.944.09-.075.363-.103.363-.103-.33.291-.434.848-.434.848.075-.057.351-.076.351-.076-.202.189-.559.73-.559.73l.374-.104c-.374.311-.483.71-.483.71l.187-.047c-.202.179-.375.801-.375.801l.127-.066c-.239.433-.366 1.159-.366 1.159s-.126-.726-.365-1.159l.127.066s-.173-.622-.375-.801l.187.047s-.11-.399-.483-.71l.373.104s-.356-.541-.558-.73c0 0 .276.019.351.076 0 0-.104-.557-.434-.848 0 0 .273.028.362.103 0 0-.22-.483-.661-.944 0 0 .239.047.344.151 0 0-.207-.52-.483-.849 0 0 .278.09.353.194 0 0-.209-.561-.44-.862 0 0 .209.056.276.122 0 0-.306-.594-.508-.791 0 0 .596-.269 1.934-.269 1.339 0 1.935.269 1.935.269C.306-.594 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(265.44 185.345)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.062-.061.254-.113.254-.113-.213.278-.405.794-.405.794C-.082.586.174.502.174.502c-.254.304-.445.782-.445.782.097-.095.317-.139.317-.139-.406.425-.609.87-.609.87.082-.07.334-.096.334-.096-.304.269-.4.781-.4.781.069-.052.323-.069.323-.069-.185.173-.514.672-.514.672l.344-.096a1.446 1.446 0 00-.445.654l.172-.044c-.185.165-.345.738-.345.738l.117-.061c-.22.399-.337 1.067-.337 1.067s-.116-.668-.336-1.067l.116.061s-.159-.573-.344-.738l.171.044s-.1-.367-.444-.654l.344.096s-.329-.499-.514-.672c0 0 .254.017.323.069 0 0-.096-.512-.4-.781 0 0 .251.026.334.096 0 0-.203-.445-.609-.87 0 0 .22.044.316.139 0 0-.19-.478-.444-.782 0 0 .256.084.325.179 0 0-.192-.516-.406-.794 0 0 .193.052.255.113 0 0-.282-.547-.468-.729 0 0 .549-.247 1.781-.247 1.233 0 1.782.247 1.782.247C.282-.547 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(270.05 185.34)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.053-.052.218-.096.218-.096-.183.237-.347.679-.347.679C-.07.501.149.43.149.43c-.218.259-.381.669-.381.669C-.149 1.017.039.98.039.98a3.05 3.05 0 00-.521.744c.071-.06.286-.082.286-.082-.26.23-.342.668-.342.668.059-.044.276-.059.276-.059-.158.148-.44.575-.44.575l.295-.082c-.295.245-.381.559-.381.559l.147-.037c-.158.141-.294.631-.294.631l.099-.052c-.188.341-.288.913-.288.913s-.1-.572-.288-.913l.1.052s-.136-.49-.295-.631l.147.037s-.086-.314-.38-.559l.294.082s-.281-.427-.44-.575c0 0 .218.015.276.059 0 0-.081-.438-.341-.668 0 0 .215.022.285.082 0 0-.173-.38-.521-.744 0 0 .189.037.271.119 0 0-.163-.41-.38-.669 0 0 .219.071.278.153 0 0-.165-.442-.347-.679 0 0 .165.044.218.096 0 0-.242-.468-.401-.623 0 0 .47-.212 1.524-.212S.4-.623.4-.623C.241-.468 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(231.872 181.974)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.085.354-.157.354-.157C.057.229-.21.949-.21.949c.095-.133.452-.25.452-.25-.354.423-.619 1.089-.619 1.089.134-.133.441-.194.441-.194-.565.592-.848 1.211-.848 1.211.115-.097.465-.133.465-.133-.423.374-.557 1.087-.557 1.087.096-.073.451-.097.451-.097-.259.242-.716.936-.716.936l.478-.133c-.478.399-.618.91-.618.91l.239-.061c-.259.23-.48 1.027-.48 1.027l.162-.085c-.306.556-.469 1.486-.469 1.486s-.162-.93-.469-1.486l.163.085s-.221-.797-.48-1.027l.239.061s-.14-.511-.618-.91l.478.133s-.457-.694-.716-.936c0 0 .355.024.45.097 0 0-.133-.713-.556-1.087 0 0 .35.036.465.133 0 0-.283-.619-.848-1.211 0 0 .306.061.441.194 0 0-.265-.666-.619-1.089 0 0 .357.117.452.25 0 0-.268-.72-.564-1.106 0 0 .268.072.354.157 0 0-.393-.761-.651-1.014 0 0 .764-.344 2.479-.344 1.716 0 2.48.344 2.48.344C.393-.761 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(57.35 203.057)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.143-.161.587-.3.587-.3-.492.738-.936 2.113-.936 2.113.159-.254.751-.477.751-.477-.587.808-1.026 2.079-1.026 2.079.222-.253.73-.369.73-.369-.937 1.131-1.405 2.313-1.405 2.313.19-.184.771-.254.771-.254-.702.715-.923 2.077-.923 2.077.159-.138.746-.184.746-.184-.428.461-1.187 1.787-1.187 1.787l.794-.254a3.946 3.946 0 00-1.026 1.738l.397-.115c-.429.438-.796 1.961-.796 1.961l.27-.161c-.508 1.061-.777 2.838-.777 2.838s-.27-1.777-.778-2.838l.27.161s-.367-1.523-.796-1.961l.397.115s-.232-.976-1.025-1.738l.793.254s-.758-1.326-1.187-1.787c0 0 .587.046.746.184 0 0-.22-1.362-.922-2.077 0 0 .58.07.77.254 0 0-.468-1.182-1.404-2.313 0 0 .507.116.73.369 0 0-.439-1.271-1.026-2.079 0 0 .591.223.75.477 0 0-.444-1.375-.936-2.113 0 0 .444.139.587.3 0 0-.65-1.454-1.079-1.938 0 0 1.267-.657 4.11-.657 2.842 0 4.109.657 4.109.657C.65-1.454 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(62.72 204.578)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.123-.139.506-.258.506-.258C.082.378-.3 1.561-.3 1.561c.136-.218.646-.41.646-.41-.506.696-.884 1.791-.884 1.791.192-.219.629-.318.629-.318-.806.974-1.21 1.993-1.21 1.993.164-.16.664-.219.664-.219-.605.615-.795 1.789-.795 1.789.137-.12.643-.159.643-.159-.369.397-1.023 1.539-1.023 1.539l.684-.218c-.684.656-.883 1.497-.883 1.497l.341-.1c-.369.378-.685 1.69-.685 1.69l.232-.139c-.437.914-.669 2.445-.669 2.445s-.232-1.531-.67-2.445l.232.139s-.316-1.312-.685-1.69l.342.1s-.2-.841-.884-1.497l.684.218s-.653-1.142-1.022-1.539c0 0 .505.039.642.159 0 0-.19-1.174-.795-1.789 0 0 .5.059.664.219 0 0-.403-1.019-1.21-1.993 0 0 .438.099.629.318 0 0-.378-1.095-.884-1.791 0 0 .51.192.647.41 0 0-.383-1.183-.807-1.819 0 0 .383.119.506.258 0 0-.56-1.252-.929-1.67 0 0 1.091-.566 3.54-.566 2.448 0 3.54.566 3.54.566C.56-1.252 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(66.906 205.141)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.097-.109.397-.203.397-.203-.333.5-.633 1.43-.633 1.43.107-.172.508-.323.508-.323-.397.547-.694 1.407-.694 1.407.15-.172.494-.25.494-.25-.634.765-.951 1.565-.951 1.565.129-.125.522-.172.522-.172-.476.484-.625 1.406-.625 1.406.108-.094.505-.125.505-.125-.29.312-.803 1.209-.803 1.209l.537-.172a2.673 2.673 0 00-.694 1.176l.268-.078c-.289.297-.538 1.327-.538 1.327l.182-.109c-.343.719-.525 1.921-.525 1.921s-.183-1.202-.526-1.921l.182.109s-.248-1.03-.538-1.327l.268.078s-.157-.66-.694-1.176l.537.172s-.513-.897-.803-1.209c0 0 .397.031.505.125 0 0-.149-.922-.624-1.406 0 0 .392.047.521.172 0 0-.317-.8-.95-1.565 0 0 .343.078.494.25 0 0-.297-.86-.695-1.407 0 0 .401.151.508.323 0 0-.3-.93-.633-1.43 0 0 .3.094.397.203 0 0-.44-.984-.73-1.312 0 0 .857-.444 2.781-.444 1.923 0 2.78.444 2.78.444C.44-.984 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(82.869 200.474)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.097-.109.397-.203.397-.203-.333.5-.633 1.429-.633 1.429.107-.171.508-.322.508-.322-.397.546-.694 1.407-.694 1.407.15-.172.493-.25.493-.25a6.533 6.533 0 00-.95 1.565c.129-.125.522-.172.522-.172-.476.484-.625 1.406-.625 1.406.108-.094.505-.125.505-.125-.29.312-.803 1.209-.803 1.209l.537-.171c-.537.515-.694 1.175-.694 1.175l.268-.078c-.289.297-.538 1.327-.538 1.327l.182-.109c-.343.718-.525 1.921-.525 1.921s-.183-1.203-.526-1.921l.182.109s-.248-1.03-.538-1.327l.268.078s-.157-.66-.694-1.175l.537.171s-.513-.897-.803-1.209c0 0 .397.031.505.125 0 0-.149-.922-.624-1.406 0 0 .392.047.521.172 0 0-.317-.8-.95-1.565 0 0 .343.078.494.25 0 0-.297-.861-.695-1.407 0 0 .401.151.508.322 0 0-.3-.929-.633-1.429 0 0 .3.094.397.203 0 0-.44-.984-.73-1.312 0 0 .857-.444 2.781-.444 1.923 0 2.78.444 2.78.444C.44-.984 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(29.659 193.313)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.097-.109.397-.203.397-.203-.333.5-.633 1.43-.633 1.43.107-.172.508-.323.508-.323-.397.547-.694 1.407-.694 1.407.15-.172.493-.25.493-.25a6.533 6.533 0 00-.95 1.565c.129-.125.522-.172.522-.172-.476.484-.625 1.406-.625 1.406.108-.094.505-.125.505-.125-.29.312-.803 1.209-.803 1.209l.537-.172a2.673 2.673 0 00-.694 1.176l.268-.078c-.289.297-.538 1.327-.538 1.327l.183-.109c-.344.718-.526 1.921-.526 1.921s-.183-1.203-.526-1.921l.182.109s-.248-1.03-.538-1.327l.268.078s-.157-.66-.694-1.176l.537.172s-.513-.897-.803-1.209c0 0 .397.031.505.125 0 0-.149-.922-.624-1.406 0 0 .392.047.521.172 0 0-.317-.8-.95-1.565 0 0 .343.078.494.25 0 0-.297-.86-.695-1.407 0 0 .401.151.508.323 0 0-.3-.93-.633-1.43 0 0 .301.094.397.203 0 0-.44-.984-.73-1.312 0 0 .857-.444 2.781-.444 1.923 0 2.78.444 2.78.444C.44-.984 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(48.903 198.556)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.143-.169.587-.313.587-.313-.492.771-.936 2.208-.936 2.208.159-.265.751-.498.751-.498C-.185 2.241-.624 3.57-.624 3.57c.222-.265.73-.386.73-.386-.937 1.183-1.405 2.418-1.405 2.418.19-.193.771-.265.771-.265-.702.747-.923 2.171-.923 2.171.159-.145.746-.193.746-.193-.429.482-1.187 1.869-1.187 1.869l.794-.266c-.794.796-1.026 1.817-1.026 1.817l.397-.121c-.429.458-.796 2.051-.796 2.051l.27-.169c-.508 1.109-.777 2.967-.777 2.967s-.27-1.858-.778-2.967l.27.169s-.367-1.593-.796-2.051l.397.121s-.232-1.021-1.025-1.817l.793.266s-.758-1.387-1.187-1.869c0 0 .587.048.746.193 0 0-.22-1.424-.922-2.171 0 0 .58.072.77.265 0 0-.468-1.235-1.404-2.418 0 0 .507.121.73.386 0 0-.439-1.329-1.026-2.173 0 0 .591.233.75.498 0 0-.444-1.437-.936-2.208 0 0 .444.144.587.313 0 0-.65-1.52-1.079-2.026 0 0 1.267-.687 4.11-.687 2.842 0 4.109.687 4.109.687C.65-1.52 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(17.216 193.473)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.101-.12.416-.222.416-.222-.349.547-.663 1.564-.663 1.564.112-.188.532-.353.532-.353-.416.598-.727 1.54-.727 1.54.157-.188.517-.274.517-.274-.663.837-.995 1.713-.995 1.713.135-.137.546-.188.546-.188-.497.529-.654 1.537-.654 1.537.113-.102.529-.136.529-.136-.304.341-.841 1.323-.841 1.323l.562-.188c-.562.564-.726 1.287-.726 1.287l.281-.086c-.304.325-.564 1.452-.564 1.452l.191-.119c-.359.786-.55 2.101-.55 2.101s-.191-1.315-.551-2.101l.191.119s-.26-1.127-.563-1.452l.281.086s-.165-.723-.726-1.287l.561.188s-.537-.982-.84-1.323c0 0 .416.034.528.136 0 0-.156-1.008-.653-1.537 0 0 .411.051.546.188 0 0-.332-.876-.995-1.713 0 0 .359.086.517.274 0 0-.311-.942-.727-1.54 0 0 .419.165.532.353 0 0-.315-1.017-.663-1.564 0 0 .314.102.416.222 0 0-.461-1.076-.765-1.435 0 0 .897-.486 2.911-.486 2.013 0 2.91.486 2.91.486C.461-1.076 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(21.926 193.338)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.143-.169.587-.314.587-.314-.492.772-.936 2.209-.936 2.209.159-.265.751-.499.751-.499C-.185 2.241-.624 3.57-.624 3.57c.222-.265.73-.386.73-.386-.937 1.182-1.405 2.418-1.405 2.418.19-.193.771-.265.771-.265-.702.747-.923 2.171-.923 2.171.159-.145.746-.193.746-.193-.428.482-1.187 1.868-1.187 1.868l.794-.265c-.794.796-1.026 1.817-1.026 1.817l.397-.121c-.429.458-.796 2.051-.796 2.051l.27-.169c-.508 1.109-.777 2.967-.777 2.967s-.27-1.858-.778-2.967l.27.169s-.367-1.593-.796-2.051l.397.121s-.232-1.021-1.025-1.817l.793.265s-.758-1.386-1.187-1.868c0 0 .587.048.746.193 0 0-.22-1.424-.922-2.171 0 0 .58.072.77.265 0 0-.468-1.236-1.404-2.418 0 0 .507.121.729.386 0 0-.438-1.329-1.026-2.174 0 0 .592.234.751.499 0 0-.444-1.437-.936-2.209 0 0 .444.145.587.314 0 0-.65-1.52-1.079-2.026 0 0 1.267-.687 4.11-.687 2.842 0 4.109.687 4.109.687C.65-1.52 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(88.27 199.267)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.143-.169.587-.314.587-.314-.492.772-.936 2.209-.936 2.209.159-.265.751-.499.751-.499C-.185 2.241-.624 3.57-.624 3.57c.222-.265.73-.386.73-.386-.937 1.182-1.405 2.418-1.405 2.418.19-.193.771-.265.771-.265-.702.747-.923 2.171-.923 2.171.159-.145.746-.193.746-.193-.429.482-1.187 1.869-1.187 1.869l.794-.266c-.794.796-1.026 1.817-1.026 1.817l.397-.121c-.429.458-.796 2.051-.796 2.051l.27-.169c-.508 1.109-.777 2.967-.777 2.967s-.27-1.858-.778-2.967l.27.169s-.367-1.593-.796-2.051l.397.121s-.232-1.021-1.025-1.817l.793.266s-.758-1.387-1.187-1.869c0 0 .587.048.746.193 0 0-.22-1.424-.922-2.171 0 0 .58.072.77.265 0 0-.468-1.236-1.404-2.418 0 0 .507.121.73.386 0 0-.439-1.329-1.026-2.174 0 0 .591.234.75.499 0 0-.444-1.437-.936-2.209 0 0 .444.145.587.314 0 0-.65-1.52-1.079-2.026 0 0 1.267-.687 4.11-.687 2.842 0 4.109.687 4.109.687C.65-1.52 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(236.478 182.27)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.082-.069.339-.129.339-.129-.284.317-.54.905-.54.905C-.11.668.232.572.232.572c-.339.346-.592.891-.592.891.128-.109.421-.158.421-.158-.54.484-.811.991-.811.991.11-.08.445-.109.445-.109-.405.306-.532.889-.532.889.091-.059.43-.079.43-.079-.247.198-.685.766-.685.766l.458-.109c-.458.326-.592.744-.592.744l.229-.049c-.247.188-.459.84-.459.84l.155-.069c-.293.455-.448 1.216-.448 1.216s-.156-.761-.449-1.216l.156.069s-.212-.652-.46-.84l.229.049s-.134-.418-.592-.744l.458.109s-.437-.568-.685-.766c0 0 .339.02.431.079 0 0-.127-.583-.533-.889 0 0 .335.029.445.109 0 0-.27-.507-.811-.991 0 0 .294.049.422.158 0 0-.254-.545-.593-.891 0 0 .342.096.434.204 0 0-.257-.588-.541-.905 0 0 .257.06.339.129 0 0-.375-.623-.622-.83 0 0 .731-.282 2.372-.282S.623-.83.623-.83C.376-.623 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(180.785 186.608)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.092-.1.38-.185.38-.185C.062.27-.226 1.117-.226 1.117-.123.961.26.823.26.823c-.38.498-.664 1.282-.664 1.282.144-.156.472-.228.472-.228-.606.697-.909 1.426-.909 1.426.123-.114.499-.157.499-.157-.455.441-.598 1.28-.598 1.28.103-.085.483-.113.483-.113-.277.284-.768 1.101-.768 1.101l.514-.156c-.514.469-.665 1.071-.665 1.071l.257-.071c-.277.27-.515 1.209-.515 1.209l.175-.1c-.329.654-.504 1.749-.504 1.749s-.174-1.095-.503-1.749l.175.1s-.238-.939-.516-1.209l.257.071s-.15-.602-.664-1.071l.514.156s-.491-.817-.769-1.101c0 0 .381.028.483.113 0 0-.142-.839-.597-1.28 0 0 .376.043.499.157 0 0-.303-.729-.91-1.426 0 0 .329.072.473.228 0 0-.284-.784-.665-1.282 0 0 .384.138.487.294 0 0-.288-.847-.606-1.302 0 0 .287.085.38.185 0 0-.422-.896-.699-1.195 0 0 .82-.404 2.661-.404 1.841 0 2.662.404 2.662.404C.421-.896 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(172.807 184.972)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.092-.1.38-.185.38-.185C.062.27-.226 1.117-.226 1.117-.123.961.26.823.26.823c-.38.498-.664 1.282-.664 1.282.144-.156.472-.228.472-.228-.606.697-.909 1.426-.909 1.426.123-.114.499-.157.499-.157-.455.441-.598 1.28-.598 1.28.103-.085.483-.113.483-.113-.277.284-.768 1.101-.768 1.101l.514-.156c-.514.469-.665 1.071-.665 1.071l.257-.071c-.277.27-.515 1.209-.515 1.209l.175-.1c-.329.654-.504 1.749-.504 1.749s-.174-1.095-.503-1.749l.175.1s-.238-.939-.516-1.209l.257.071s-.15-.602-.664-1.071l.514.156s-.491-.817-.769-1.101c0 0 .381.028.483.113 0 0-.142-.839-.597-1.28 0 0 .376.043.499.157 0 0-.303-.729-.91-1.426 0 0 .329.072.473.228 0 0-.284-.784-.664-1.282 0 0 .383.138.486.294 0 0-.288-.847-.606-1.302 0 0 .287.085.38.185 0 0-.422-.896-.699-1.195 0 0 .82-.404 2.661-.404 1.841 0 2.662.404 2.662.404C.421-.896 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(127.976 186.521)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.1-.128.412-.238.412-.238-.345.585-.657 1.673-.657 1.673.112-.201.527-.377.527-.377-.412.64-.72 1.647-.72 1.647.156-.201.512-.293.512-.293a7.958 7.958 0 00-.985 1.832c.134-.146.541-.201.541-.201-.493.566-.647 1.644-.647 1.644.111-.109.523-.146.523-.146-.301.366-.832 1.416-.832 1.416l.556-.201c-.556.603-.719 1.376-.719 1.376l.278-.092c-.3.348-.558 1.554-.558 1.554l.189-.128c-.356.84-.545 2.247-.545 2.247s-.189-1.407-.545-2.247l.189.128s-.257-1.206-.558-1.554l.279.092s-.163-.773-.72-1.376l.557.201s-.532-1.05-.832-1.416c0 0 .411.037.523.146 0 0-.155-1.078-.647-1.644 0 0 .407.055.54.201 0 0-.328-.936-.985-1.832 0 0 .356.092.512.293 0 0-.308-1.007-.719-1.647 0 0 .415.176.526.377 0 0-.311-1.088-.656-1.673 0 0 .311.11.411.238 0 0-.456-1.151-.756-1.535 0 0 .888-.52 2.881-.52 1.993 0 2.882.52 2.882.52C.456-1.151 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(139.115 187.31)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.075-.081.307-.149.307-.149C.05.219-.183.903-.183.903-.1.777.21.666.21.666c-.307.402-.537 1.036-.537 1.036.116-.126.382-.184.382-.184A4.742 4.742 0 00-.68 2.671c.099-.092.403-.127.403-.127C-.644 2.9-.76 3.579-.76 3.579c.083-.069.391-.092.391-.092-.225.23-.622.891-.622.891l.416-.127c-.416.38-.537.866-.537.866l.208-.058c-.225.219-.417.978-.417.978l.141-.081c-.266.529-.407 1.415-.407 1.415s-.141-.886-.407-1.415l.141.081s-.192-.759-.416-.978l.207.058s-.121-.486-.537-.866l.416.127s-.397-.661-.622-.891c0 0 .308.023.391.092 0 0-.115-.679-.483-1.035 0 0 .304.035.404.127 0 0-.246-.59-.736-1.153 0 0 .266.058.382.184 0 0-.23-.634-.537-1.036 0 0 .31.111.393.237 0 0-.233-.684-.49-1.052 0 0 .232.068.307.149 0 0-.34-.724-.565-.966 0 0 .664-.327 2.152-.327 1.489 0 2.152.327 2.152.327C.341-.724 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(137.093 187.874)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.06-.064.245-.119.245-.119-.205.293-.39.838-.39.838C-.079.618.168.53.168.53c-.245.32-.428.825-.428.825.092-.1.304-.146.304-.146-.39.448-.586.917-.586.917.08-.073.322-.1.322-.1-.293.283-.385.824-.385.824.066-.055.311-.073.311-.073-.179.183-.495.709-.495.709l.331-.101c-.331.302-.428.69-.428.69l.166-.046c-.179.174-.332.778-.332.778l.113-.064c-.212.421-.325 1.126-.325 1.126s-.112-.705-.324-1.126l.113.064s-.153-.604-.332-.778l.165.046s-.096-.388-.427-.69l.331.101s-.316-.526-.495-.709c0 0 .245.018.311.073 0 0-.092-.541-.385-.824 0 0 .242.027.322.1 0 0-.196-.469-.586-.917 0 0 .212.046.304.146 0 0-.183-.505-.428-.825 0 0 .247.088.313.189 0 0-.185-.545-.39-.838 0 0 .185.055.245.119 0 0-.271-.577-.45-.769 0 0 .528-.261 1.713-.261C-.078-1.03.45-.769.45-.769.271-.577 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(142.734 186.647)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.066-.071.271-.132.271-.132-.227.325-.432.928-.432.928C-.088.685.186.587.186.587c-.272.355-.474.913-.474.913.102-.111.337-.162.337-.162C-.383 1.835-.6 2.354-.6 2.354c.088-.081.356-.111.356-.111-.324.314-.426.912-.426.912.073-.061.344-.081.344-.081-.197.203-.547.785-.547.785l.366-.111a1.708 1.708 0 00-.473.763l.183-.051c-.198.193-.368.862-.368.862l.125-.071c-.235.466-.359 1.247-.359 1.247s-.124-.781-.359-1.247l.125.071s-.17-.669-.368-.862l.184.051s-.108-.429-.474-.763l.366.111s-.35-.582-.547-.785c0 0 .271.02.344.081 0 0-.102-.598-.426-.912 0 0 .268.03.356.111 0 0-.217-.519-.649-1.016 0 0 .235.051.337.162 0 0-.202-.558-.473-.913 0 0 .273.098.346.209 0 0-.205-.603-.432-.928 0 0 .205.061.271.132 0 0-.3-.639-.498-.852 0 0 .585-.288 1.897-.288S.498-.852.498-.852C.3-.639 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(118.256 188.801)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.1-.128.412-.238.412-.238-.345.585-.657 1.673-.657 1.673.112-.201.527-.377.527-.377-.412.639-.72 1.647-.72 1.647.156-.201.512-.293.512-.293a7.958 7.958 0 00-.985 1.832c.134-.146.541-.201.541-.201-.493.566-.647 1.644-.647 1.644.111-.109.523-.146.523-.146-.301.366-.832 1.416-.832 1.416l.556-.201c-.556.603-.719 1.376-.719 1.376l.278-.092c-.3.348-.558 1.554-.558 1.554l.189-.128c-.356.84-.545 2.247-.545 2.247s-.189-1.407-.545-2.247l.189.128s-.257-1.206-.558-1.554l.279.092s-.163-.773-.719-1.376l.556.201s-.532-1.05-.832-1.416c0 0 .411.037.523.146 0 0-.155-1.078-.647-1.644 0 0 .407.055.54.201 0 0-.328-.936-.985-1.832 0 0 .356.092.512.293 0 0-.308-1.008-.719-1.647 0 0 .415.176.526.377 0 0-.311-1.088-.656-1.673 0 0 .311.11.411.238 0 0-.456-1.151-.756-1.535 0 0 .888-.52 2.881-.52 1.993 0 2.882.52 2.882.52C.456-1.151 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(239.182 181.973)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.071-.06.292-.111.292-.111-.245.273-.466.78-.466.78C-.095.576.2.493.2.493c-.292.299-.511.768-.511.768.111-.094.364-.136.364-.136-.466.417-.699.854-.699.854.094-.068.383-.094.383-.094-.349.264-.459.767-.459.767.079-.051.371-.068.371-.068-.213.17-.59.66-.59.66l.394-.094c-.394.281-.51.642-.51.642l.198-.043c-.214.162-.396.724-.396.724l.134-.059c-.253.392-.387 1.048-.387 1.048s-.134-.656-.387-1.048l.134.059s-.182-.562-.396-.724l.198.043s-.116-.361-.51-.642l.394.094s-.377-.49-.59-.66c0 0 .292.017.371.068 0 0-.11-.503-.459-.767 0 0 .289.026.383.094 0 0-.233-.437-.699-.854 0 0 .253.042.364.136 0 0-.219-.469-.511-.768 0 0 .295.083.374.176 0 0-.221-.507-.466-.78 0 0 .221.051.292.111 0 0-.324-.537-.537-.716 0 0 .63-.242 2.045-.242S.537-.716.537-.716C.324-.537 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(300.963 181.172)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.092-.077.376-.143.376-.143C.061.208-.223.862-.223.862c.101-.121.48-.227.48-.227-.376.384-.657.989-.657.989.142-.121.468-.176.468-.176-.6.538-.9 1.1-.9 1.1.122-.088.493-.121.493-.121-.449.339-.591.987-.591.987.102-.066.478-.088.478-.088-.274.22-.76.85-.76.85l.508-.121c-.508.362-.657.827-.657.827l.254-.055c-.274.208-.509.932-.509.932l.173-.077c-.326.505-.498 1.349-.498 1.349s-.173-.844-.498-1.349l.172.077s-.235-.724-.509-.932l.254.055s-.149-.465-.657-.827l.508.121s-.486-.63-.76-.85c0 0 .376.022.478.088 0 0-.142-.648-.591-.987 0 0 .372.033.493.121 0 0-.3-.562-.9-1.1 0 0 .326.055.468.176 0 0-.281-.605-.657-.989 0 0 .379.106.481.227 0 0-.285-.654-.6-1.005 0 0 .285.066.376.143 0 0-.417-.691-.691-.921 0 0 .811-.313 2.633-.313 1.821 0 2.632.313 2.632.313C.417-.691 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(307.074 179.388)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.091-.1.376-.185.376-.185-.315.456-.599 1.304-.599 1.304.101-.157.48-.294.48-.294C-.119 1.324-.4 2.109-.4 2.109c.142-.157.468-.228.468-.228a5.9 5.9 0 00-.9 1.428c.122-.114.493-.157.493-.157-.449.442-.59 1.283-.59 1.283.101-.086.477-.114.477-.114-.274.285-.76 1.103-.76 1.103l.508-.156c-.508.47-.657 1.073-.657 1.073l.255-.071c-.275.27-.51 1.211-.51 1.211l.173-.1c-.326.655-.498 1.752-.498 1.752s-.173-1.097-.498-1.752l.173.1s-.236-.941-.51-1.211l.254.071s-.149-.603-.657-1.073l.508.156s-.486-.818-.76-1.103c0 0 .376.028.478.114 0 0-.141-.841-.591-1.283 0 0 .372.043.493.157 0 0-.3-.73-.899-1.428 0 0 .325.071.467.228 0 0-.281-.785-.657-1.284 0 0 .379.137.481.294 0 0-.285-.848-.6-1.304 0 0 .285.085.376.185 0 0-.417-.898-.691-1.197 0 0 .812-.405 2.633-.405s2.632.405 2.632.405C.417-.898 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(276.161 186.644)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.09.354-.166.354-.166-.297.409-.564 1.17-.564 1.17C-.115.863.242.74.242.74c-.354.447-.619 1.151-.619 1.151.134-.14.441-.204.441-.204-.565.626-.848 1.281-.848 1.281.115-.103.465-.141.465-.141-.423.396-.556 1.15-.556 1.15.095-.077.45-.102.45-.102-.259.255-.716.99-.716.99l.478-.141c-.478.422-.618.962-.618.962l.239-.063c-.259.242-.48 1.086-.48 1.086l.163-.09c-.307.588-.469 1.572-.469 1.572s-.163-.984-.469-1.572l.162.09s-.221-.844-.48-1.086l.24.063s-.14-.54-.619-.962l.479.141s-.458-.735-.716-.99c0 0 .354.025.45.102 0 0-.133-.754-.557-1.15 0 0 .35.038.465.141 0 0-.283-.655-.848-1.281 0 0 .307.064.441.204 0 0-.265-.704-.619-1.151 0 0 .357.123.453.264 0 0-.268-.761-.565-1.17 0 0 .268.076.354.166 0 0-.392-.805-.651-1.073 0 0 .764-.364 2.48-.364 1.715 0 2.479.364 2.479.364C.392-.805 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(284.956 185.837)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.078-.081.321-.151.321-.151C.052.22-.191.911-.191.911-.104.783.22.671.22.671c-.321.406-.562 1.045-.562 1.045.122-.128.4-.185.4-.185-.513.568-.769 1.162-.769 1.162.104-.093.422-.128.422-.128-.384.359-.505 1.044-.505 1.044.087-.07.408-.093.408-.093-.235.232-.649.898-.649.898l.434-.128c-.434.383-.562.873-.562.873l.218-.058c-.235.221-.436.986-.436.986l.148-.081c-.278.533-.426 1.426-.426 1.426s-.147-.893-.425-1.426l.147.081s-.201-.765-.435-.986l.217.058s-.127-.49-.561-.873l.434.128s-.415-.666-.65-.898c0 0 .322.023.409.093 0 0-.121-.685-.506-1.044 0 0 .318.035.422.128 0 0-.256-.594-.769-1.162 0 0 .278.057.4.185 0 0-.24-.639-.562-1.045 0 0 .324.112.411.24 0 0-.243-.691-.512-1.062 0 0 .243.07.321.151 0 0-.356-.73-.59-.974 0 0 .693-.33 2.249-.33s2.25.33 2.25.33C.356-.73 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(268.718 186.006)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.072-.075.297-.139.297-.139C.048.203-.176.84-.176.84-.096.723.203.619.203.619c-.297.375-.518.964-.518.964.112-.117.368-.171.368-.171a4.434 4.434 0 00-.709 1.073c.096-.086.389-.118.389-.118-.354.331-.466.963-.466.963.08-.064.377-.086.377-.086-.217.214-.6.829-.6.829l.401-.118c-.401.353-.518.806-.518.806l.201-.054c-.217.204-.402.91-.402.91l.136-.075c-.257.492-.393 1.316-.393 1.316s-.136-.824-.392-1.316l.136.075s-.186-.706-.402-.91l.2.054s-.117-.453-.518-.806l.401.118s-.383-.615-.599-.829c0 0 .296.022.376.086 0 0-.111-.632-.466-.963 0 0 .294.032.39.118 0 0-.237-.548-.71-1.073 0 0 .257.054.369.171 0 0-.222-.589-.518-.964 0 0 .298.104.379.221 0 0-.225-.637-.473-.979 0 0 .224.064.297.139 0 0-.329-.674-.546-.899 0 0 .64-.304 2.076-.304S.545-.899.545-.899C.329-.674 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(170.505 183.425)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.076.328-.141.328-.141-.275.347-.523.994-.523.994.089-.12.419-.225.419-.225-.327.38-.572.979-.572.979.123-.12.407-.174.407-.174-.523.532-.784 1.088-.784 1.088.106-.087.43-.119.43-.119-.392.336-.515.977-.515.977.089-.065.416-.087.416-.087-.239.217-.662.841-.662.841l.443-.12c-.443.359-.573.818-.573.818l.222-.054c-.239.206-.444.922-.444.922l.15-.076c-.283.5-.434 1.336-.434 1.336s-.15-.836-.434-1.336l.151.076s-.205-.716-.444-.922l.221.054s-.13-.459-.573-.818l.443.12s-.423-.624-.662-.841c0 0 .328.022.416.087 0 0-.123-.641-.515-.977 0 0 .324.032.431.119 0 0-.262-.556-.785-1.088 0 0 .284.054.408.174 0 0-.245-.599-.573-.979 0 0 .33.105.419.225 0 0-.248-.647-.523-.994 0 0 .248.065.328.141 0 0-.363-.684-.602-.912 0 0 .707-.309 2.294-.309 1.587 0 2.294.309 2.294.309C.363-.684 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(177.46 186.084)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.076.328-.141.328-.141-.275.347-.523.994-.523.994.089-.12.419-.225.419-.225-.328.38-.573.979-.573.979.124-.12.408-.174.408-.174-.523.532-.784 1.088-.784 1.088.106-.087.43-.119.43-.119-.392.336-.515.977-.515.977.088-.065.416-.087.416-.087-.239.217-.662.841-.662.841l.443-.12c-.443.359-.573.818-.573.818l.222-.054c-.24.206-.445.922-.445.922l.151-.076c-.284.5-.434 1.336-.434 1.336s-.15-.836-.434-1.336l.151.076s-.205-.716-.445-.922l.222.054s-.13-.459-.573-.818l.443.12s-.423-.624-.662-.841c0 0 .328.022.416.087 0 0-.123-.641-.515-.977 0 0 .324.032.43.119 0 0-.261-.556-.784-1.088 0 0 .284.054.408.174 0 0-.245-.599-.573-.979 0 0 .33.105.419.225 0 0-.248-.647-.523-.994 0 0 .248.065.328.141 0 0-.363-.684-.602-.912 0 0 .707-.309 2.294-.309 1.587 0 2.294.309 2.294.309C.363-.684 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(121.373 187.95)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.098.355-.181.355-.181-.298.446-.566 1.277-.566 1.277C-.115.942.243.808.243.808c-.355.488-.62 1.256-.62 1.256.134-.153.441-.223.441-.223-.566.684-.849 1.398-.849 1.398.115-.111.466-.153.466-.153-.425.432-.558 1.255-.558 1.255.096-.083.451-.111.451-.111-.259.279-.717 1.08-.717 1.08l.479-.153c-.479.46-.62 1.05-.62 1.05l.24-.07c-.259.265-.481 1.186-.481 1.186l.163-.098c-.307.642-.47 1.716-.47 1.716s-.163-1.074-.47-1.716l.163.098s-.222-.921-.481-1.186l.24.07s-.14-.59-.62-1.05l.48.153s-.458-.801-.717-1.08c0 0 .355.028.45.111 0 0-.133-.823-.557-1.255 0 0 .351.042.466.153 0 0-.283-.714-.849-1.398 0 0 .307.07.441.223 0 0-.265-.768-.62-1.256 0 0 .357.134.453.288 0 0-.268-.831-.565-1.277 0 0 .268.083.355.181 0 0-.394-.879-.653-1.172 0 0 .766-.397 2.484-.397s2.484.397 2.484.397C.393-.879 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(189.734 188.539)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.076.328-.141.328-.141-.275.347-.523.994-.523.994.089-.12.419-.225.419-.225-.328.38-.573.979-.573.979.124-.12.408-.174.408-.174-.523.532-.784 1.088-.784 1.088.106-.087.43-.119.43-.119-.392.336-.515.977-.515.977.089-.065.416-.087.416-.087-.239.217-.662.841-.662.841l.443-.12c-.443.359-.573.818-.573.818l.222-.054c-.239.206-.445.922-.445.922l.151-.076c-.283.5-.434 1.336-.434 1.336s-.15-.836-.434-1.336l.151.076s-.205-.716-.445-.922l.222.054s-.13-.459-.573-.818l.443.12s-.423-.624-.662-.841c0 0 .328.022.416.087 0 0-.123-.641-.515-.977 0 0 .324.032.43.119 0 0-.261-.556-.784-1.088 0 0 .284.054.408.174 0 0-.245-.599-.573-.979 0 0 .33.105.419.225 0 0-.248-.647-.523-.994 0 0 .248.065.328.141 0 0-.363-.684-.602-.912 0 0 .707-.309 2.294-.309 1.587 0 2.294.309 2.294.309C.363-.684 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(199.608 186.347)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.076.328-.141.328-.141-.275.347-.523.994-.523.994.089-.12.419-.225.419-.225-.328.38-.572.979-.572.979.123-.12.407-.174.407-.174-.523.532-.784 1.088-.784 1.088.106-.087.43-.119.43-.119-.392.336-.515.977-.515.977.089-.065.416-.087.416-.087-.239.217-.662.841-.662.841l.443-.12c-.443.359-.573.818-.573.818l.222-.054c-.24.206-.445.922-.445.922l.151-.076c-.284.5-.434 1.336-.434 1.336s-.15-.836-.434-1.336l.151.076s-.205-.716-.444-.922l.221.054s-.13-.459-.573-.818l.443.12s-.423-.624-.662-.841c0 0 .328.022.416.087 0 0-.123-.641-.515-.977 0 0 .324.032.43.119 0 0-.261-.556-.784-1.088 0 0 .284.054.408.174 0 0-.245-.599-.573-.979 0 0 .33.105.419.225 0 0-.248-.647-.523-.994 0 0 .248.065.328.141 0 0-.363-.684-.602-.912 0 0 .707-.309 2.294-.309 1.587 0 2.294.309 2.294.309C.363-.684 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(187.182 188.534)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.105.328-.194.328-.194-.275.478-.523 1.367-.523 1.367.089-.165.419-.309.419-.309-.327.523-.573 1.346-.573 1.346.124-.165.408-.239.408-.239-.523.731-.784 1.496-.784 1.496.106-.119.43-.164.43-.164-.392.462-.515 1.343-.515 1.343.089-.089.416-.119.416-.119-.239.298-.662 1.156-.662 1.156l.443-.164a2.7 2.7 0 00-.573 1.124l.222-.075c-.239.284-.445 1.269-.445 1.269l.151-.104c-.283.687-.434 1.836-.434 1.836s-.15-1.149-.434-1.836l.151.104s-.205-.985-.445-1.269l.222.075s-.13-.631-.573-1.124l.443.164s-.423-.858-.662-1.156c0 0 .328.03.416.119 0 0-.123-.881-.515-1.343 0 0 .324.045.431.164 0 0-.262-.765-.785-1.496 0 0 .284.074.408.239 0 0-.245-.823-.573-1.346 0 0 .33.144.419.309 0 0-.248-.889-.523-1.367 0 0 .248.089.328.194 0 0-.363-.941-.602-1.254 0 0 .707-.425 2.294-.425 1.587 0 2.294.425 2.294.425C.363-.941 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(182.18 184.441)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.104.328-.194.328-.194-.275.478-.523 1.367-.523 1.367.089-.165.419-.309.419-.309-.328.523-.572 1.346-.572 1.346.123-.165.407-.239.407-.239-.523.731-.784 1.496-.784 1.496.106-.119.43-.164.43-.164-.392.462-.515 1.343-.515 1.343.089-.089.416-.119.416-.119-.239.298-.662 1.156-.662 1.156l.443-.164a2.7 2.7 0 00-.573 1.124l.222-.074c-.239.283-.444 1.268-.444 1.268l.15-.104c-.283.687-.434 1.836-.434 1.836s-.15-1.149-.434-1.836l.151.104s-.205-.985-.444-1.268l.221.074s-.13-.631-.573-1.124l.443.164s-.423-.858-.662-1.156c0 0 .328.03.416.119 0 0-.123-.881-.515-1.343 0 0 .324.045.431.164 0 0-.262-.765-.785-1.496 0 0 .284.074.408.239 0 0-.245-.823-.573-1.346 0 0 .33.144.419.309 0 0-.248-.889-.523-1.367 0 0 .248.09.328.194 0 0-.363-.94-.602-1.254 0 0 .707-.425 2.294-.425 1.587 0 2.294.425 2.294.425C.363-.94 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(434.813 184.146)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.109-.094.447-.174.447-.174-.374.428-.713 1.223-.713 1.223C-.145.902.306.773.306.773c-.447.467-.782 1.203-.782 1.203.17-.147.557-.214.557-.214A5.469 5.469 0 00-.99 3.1c.145-.107.588-.147.588-.147-.535.414-.703 1.202-.703 1.202.121-.08.568-.107.568-.107-.326.267-.904 1.034-.904 1.034l.604-.147c-.604.441-.781 1.006-.781 1.006l.302-.067c-.326.254-.606 1.135-.606 1.135l.206-.094c-.387.614-.593 1.642-.593 1.642s-.205-1.028-.592-1.642l.206.094s-.28-.881-.607-1.135l.303.067s-.177-.565-.781-1.006l.604.147s-.578-.767-.904-1.034c0 0 .447.027.568.107 0 0-.168-.788-.703-1.202 0 0 .442.04.587.147 0 0-.356-.684-1.07-1.338 0 0 .387.067.556.214 0 0-.334-.736-.781-1.203 0 0 .45.129.571.276 0 0-.338-.795-.713-1.223 0 0 .339.08.448.174 0 0-.496-.841-.822-1.121 0 0 .965-.38 3.13-.38 2.166 0 3.131.38 3.131.38C.496-.841 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(443.059 185.783)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.109-.094.447-.174.447-.174-.374.428-.713 1.223-.713 1.223C-.145.902.306.773.306.773c-.447.467-.781 1.203-.781 1.203.169-.147.556-.214.556-.214A5.469 5.469 0 00-.99 3.1c.145-.107.588-.147.588-.147-.535.414-.703 1.202-.703 1.202.121-.08.568-.107.568-.107-.326.267-.904 1.034-.904 1.034l.604-.147c-.604.441-.781 1.006-.781 1.006l.302-.067c-.326.254-.606 1.135-.606 1.135l.206-.094c-.387.614-.593 1.642-.593 1.642s-.205-1.028-.592-1.642l.206.094s-.28-.881-.607-1.135l.303.067s-.177-.565-.782-1.006l.605.147s-.578-.767-.904-1.034c0 0 .447.027.568.107 0 0-.168-.788-.703-1.202 0 0 .442.04.587.147 0 0-.356-.684-1.07-1.338 0 0 .387.067.556.214 0 0-.334-.736-.781-1.203 0 0 .451.129.571.276 0 0-.338-.795-.713-1.223 0 0 .339.08.448.174 0 0-.496-.841-.822-1.121 0 0 .965-.38 3.13-.38 2.166 0 3.131.38 3.131.38C.496-.841 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(462.329 187.089)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.109-.093.447-.173.447-.173-.374.427-.713 1.222-.713 1.222C-.145.902.306.773.306.773c-.447.467-.782 1.203-.782 1.203.17-.147.556-.214.556-.214A5.478 5.478 0 00-.99 3.1c.145-.106.587-.146.587-.146-.534.413-.702 1.201-.702 1.201.121-.08.568-.107.568-.107-.327.267-.904 1.034-.904 1.034l.604-.147c-.604.441-.781 1.006-.781 1.006l.302-.067c-.326.254-.606 1.135-.606 1.135l.205-.094c-.386.614-.592 1.642-.592 1.642s-.205-1.028-.592-1.642l.206.094s-.28-.881-.607-1.135l.303.067s-.177-.565-.782-1.006l.605.147s-.578-.767-.904-1.034c0 0 .447.027.568.107 0 0-.168-.788-.703-1.201 0 0 .442.04.587.146 0 0-.357-.684-1.07-1.338 0 0 .387.067.556.214 0 0-.334-.736-.781-1.203 0 0 .45.129.571.276 0 0-.338-.795-.713-1.222 0 0 .339.08.448.173 0 0-.496-.841-.822-1.121 0 0 .965-.38 3.13-.38 2.166 0 3.131.38 3.131.38C.496-.841 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(470.689 185.353)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.074.353-.137.353-.137C.057.2-.21.827-.21.827-.114.711.241.61.241.61c-.352.368-.616.949-.616.949.133-.116.439-.169.439-.169a4.33 4.33 0 00-.845 1.055c.115-.084.463-.115.463-.115-.421.326-.554.947-.554.947.096-.063.448-.084.448-.084-.257.211-.713.816-.713.816l.477-.116c-.477.347-.616.793-.616.793l.238-.053c-.257.2-.478.895-.478.895l.162-.073c-.305.484-.467 1.295-.467 1.295s-.162-.811-.467-1.295l.162.073s-.221-.695-.478-.895l.238.053s-.139-.446-.616-.793l.477.116s-.456-.605-.713-.816c0 0 .352.021.448.084 0 0-.133-.621-.554-.947 0 0 .348.031.463.115 0 0-.282-.539-.845-1.055 0 0 .306.053.439.169 0 0-.264-.581-.617-.949 0 0 .356.101.452.217 0 0-.267-.627-.563-.964 0 0 .267.063.353.137 0 0-.391-.663-.648-.885 0 0 .761-.299 2.469-.299 1.708 0 2.469.299 2.469.299C.391-.663 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(455.676 186.265)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.079-.068.323-.126.323-.126-.271.309-.515.884-.515.884C-.105.652.221.559.221.559c-.323.338-.565.87-.565.87.122-.106.402-.154.402-.154-.516.473-.774.967-.774.967.105-.077.425-.106.425-.106-.387.299-.508.869-.508.869.087-.058.411-.077.411-.077-.237.193-.654.748-.654.748l.437-.106c-.437.318-.565.727-.565.727l.218-.049c-.236.184-.438.821-.438.821l.149-.068c-.28.445-.429 1.188-.429 1.188s-.148-.743-.428-1.188l.149.068s-.203-.637-.439-.821l.219.049s-.128-.409-.565-.727l.437.106s-.418-.555-.654-.748c0 0 .323.019.411.077 0 0-.122-.57-.508-.869 0 0 .319.029.424.106 0 0-.258-.494-.774-.967 0 0 .28.048.402.154 0 0-.241-.532-.565-.87 0 0 .326.093.414.199 0 0-.245-.575-.516-.884 0 0 .245.058.323.126 0 0-.358-.608-.594-.811 0 0 .698-.275 2.264-.275 1.567 0 2.265.275 2.265.275C.358-.608 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(468.41 186.436)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.082.393-.153.393-.153C.064.223-.234.922-.234.922-.127.793.269.68.269.68c-.393.41-.687 1.057-.687 1.057.149-.129.489-.187.489-.187-.627.575-.941 1.176-.941 1.176.127-.094.516-.129.516-.129-.47.363-.618 1.057-.618 1.057.106-.071.5-.094.5-.094-.287.234-.795.909-.795.909l.531-.129a1.936 1.936 0 00-.687.884l.266-.059c-.287.223-.533.998-.533.998l.181-.082c-.34.54-.521 1.443-.521 1.443s-.181-.903-.521-1.443l.181.082s-.246-.775-.533-.998l.266.059s-.156-.497-.687-.884l.531.129s-.508-.675-.795-.909c0 0 .394.023.5.094 0 0-.148-.694-.618-1.057 0 0 .389.035.516.129 0 0-.314-.601-.941-1.176 0 0 .34.058.489.187 0 0-.294-.647-.687-1.057 0 0 .396.113.503.242 0 0-.298-.699-.627-1.075 0 0 .297.071.393.153 0 0-.436-.74-.723-.986 0 0 .849-.334 2.753-.334 1.904 0 2.753.334 2.753.334C.436-.74 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(431.065 184.517)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.085-.083.351-.154.351-.154C.057.225-.208.928-.208.928-.113.798.24.684.24.684c-.351.414-.613 1.065-.613 1.065.133-.13.436-.189.436-.189-.559.579-.839 1.184-.839 1.184.114-.094.461-.13.461-.13-.42.366-.551 1.064-.551 1.064.094-.071.445-.095.445-.095-.256.237-.709.915-.709.915l.474-.129a1.947 1.947 0 00-.612.889l.237-.059c-.256.225-.476 1.005-.476 1.005l.162-.083c-.304.544-.464 1.453-.464 1.453s-.161-.909-.465-1.453l.162.083s-.22-.78-.476-1.005l.237.059s-.138-.5-.612-.889l.474.129s-.453-.678-.709-.915c0 0 .351.024.445.095 0 0-.131-.698-.55-1.064 0 0 .346.036.46.13 0 0-.28-.605-.839-1.184 0 0 .303.059.436.189 0 0-.262-.651-.613-1.065 0 0 .354.114.448.244 0 0-.265-.703-.558-1.082 0 0 .265.071.35.154 0 0-.388-.745-.644-.993 0 0 .756-.336 2.454-.336 1.697 0 2.453.336 2.453.336C.388-.745 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(439.316 186.121)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.074-.063.302-.117.302-.117C.049.171-.18.708-.18.708-.098.609.207.522.207.522c-.302.316-.528.813-.528.813.114-.099.375-.144.375-.144-.481.442-.723.904-.723.904.098-.072.397-.099.397-.099-.361.279-.475.811-.475.811.082-.054.384-.072.384-.072-.22.181-.611.699-.611.699l.409-.099c-.409.297-.528.679-.528.679l.204-.045c-.221.171-.41.767-.41.767l.139-.064c-.261.415-.4 1.11-.4 1.11s-.139-.695-.4-1.11l.139.064s-.189-.596-.41-.767l.205.045s-.12-.382-.528-.679l.408.099s-.39-.518-.611-.699c0 0 .302.018.384.072 0 0-.113-.532-.475-.811 0 0 .299.027.397.099 0 0-.241-.462-.723-.904 0 0 .261.045.376.144 0 0-.226-.497-.529-.813 0 0 .305.087.387.186 0 0-.229-.537-.482-.825 0 0 .229.054.302.117 0 0-.335-.568-.555-.758 0 0 .652-.256 2.115-.256S.555-.758.555-.758C.335-.568 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(464.19 186.632)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.073-.063.302-.117.302-.117C.049.171-.18.708-.18.708-.098.609.207.522.207.522c-.302.316-.528.813-.528.813.114-.099.375-.144.375-.144-.482.442-.723.904-.723.904.098-.072.397-.099.397-.099-.361.279-.475.811-.475.811.082-.054.384-.072.384-.072-.22.181-.611.699-.611.699l.409-.099a1.478 1.478 0 00-.528.679l.204-.045c-.22.171-.41.766-.41.766l.139-.063c-.261.415-.4 1.11-.4 1.11s-.139-.695-.4-1.11l.139.063s-.189-.595-.41-.766l.204.045s-.119-.382-.527-.679l.408.099s-.39-.518-.611-.699c0 0 .303.018.384.072 0 0-.113-.532-.475-.811 0 0 .299.027.397.099 0 0-.241-.462-.723-.904 0 0 .261.045.376.144 0 0-.226-.497-.529-.813 0 0 .305.087.387.186 0 0-.229-.537-.482-.825 0 0 .229.054.302.117 0 0-.335-.568-.555-.758 0 0 .652-.256 2.115-.256S.555-.758.555-.758C.335-.568 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(452.855 186.916)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.073-.063.302-.117.302-.117C.049.171-.18.708-.18.708-.098.609.207.522.207.522c-.302.316-.528.813-.528.813.114-.099.375-.144.375-.144a3.727 3.727 0 00-.723.904c.098-.072.397-.1.397-.1-.361.28-.475.812-.475.812.082-.054.384-.072.384-.072-.22.18-.611.699-.611.699l.409-.099c-.409.297-.528.679-.528.679l.204-.045c-.221.171-.41.767-.41.767l.139-.064c-.261.415-.4 1.11-.4 1.11s-.139-.695-.4-1.11l.139.064s-.189-.596-.41-.767l.205.045s-.12-.382-.528-.679l.408.099s-.39-.519-.611-.699c0 0 .302.018.384.072 0 0-.113-.532-.475-.812 0 0 .299.028.397.1 0 0-.241-.462-.723-.904 0 0 .261.045.376.144 0 0-.226-.497-.529-.813 0 0 .305.087.387.186 0 0-.229-.537-.482-.825 0 0 .229.054.302.117 0 0-.335-.568-.555-.758 0 0 .652-.256 2.115-.256S.555-.758.555-.758C.335-.568 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(473.255 185.938)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.082-.08.338-.149.338-.149C.055.217-.201.898-.201.898-.109.772.231.662.231.662c-.338.4-.591 1.03-.591 1.03.128-.126.421-.183.421-.183a4.676 4.676 0 00-.809 1.146c.109-.092.444-.126.444-.126-.405.354-.532 1.029-.532 1.029.092-.069.43-.092.43-.092-.247.229-.684.885-.684.885l.457-.125c-.457.377-.59.861-.59.861l.228-.058c-.247.218-.458.972-.458.972l.155-.08c-.292.526-.448 1.406-.448 1.406s-.155-.88-.447-1.406l.155.08s-.212-.754-.458-.972l.228.058s-.134-.484-.591-.861l.457.125s-.436-.656-.683-.885c0 0 .338.023.43.092 0 0-.128-.675-.532-1.029 0 0 .334.034.444.126 0 0-.27-.586-.809-1.146 0 0 .292.057.42.183 0 0-.252-.63-.591-1.03 0 0 .341.11.433.236 0 0-.256-.681-.539-1.047 0 0 .256.069.338.149 0 0-.375-.72-.622-.96 0 0 .73-.325 2.367-.325 1.638 0 2.368.325 2.368.325C.375-.72 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(436.963 186.117)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.073-.087.302-.161.302-.161C.049.236-.18.974-.18.974-.098.838.207.718.207.718c-.302.434-.528 1.118-.528 1.118.114-.137.375-.199.375-.199-.482.608-.723 1.244-.723 1.244.098-.1.397-.137.397-.137-.361.384-.475 1.117-.475 1.117.082-.075.384-.1.384-.1-.221.248-.611.961-.611.961l.409-.136c-.409.409-.528.934-.528.934l.204-.062c-.221.235-.41 1.054-.41 1.054l.139-.087c-.261.571-.4 1.526-.4 1.526s-.139-.955-.4-1.526l.139.087s-.189-.819-.41-1.054l.204.062s-.119-.525-.527-.934l.408.136s-.39-.713-.611-.961c0 0 .302.025.384.1 0 0-.113-.733-.475-1.117 0 0 .299.037.397.137 0 0-.241-.636-.723-1.244 0 0 .261.062.376.199 0 0-.226-.684-.529-1.118 0 0 .305.12.387.256 0 0-.229-.738-.482-1.135 0 0 .229.074.302.161 0 0-.335-.782-.555-1.042 0 0 .652-.353 2.115-.353s2.115.353 2.115.353C.335-.782 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(458.02 186.68)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.084-.079.346-.147.346-.147C.056.216-.205.891-.205.891-.112.767.236.657.236.657c-.345.397-.603 1.023-.603 1.023.13-.125.429-.182.429-.182-.551.556-.827 1.137-.827 1.137.113-.09.454-.125.454-.125-.413.352-.543 1.022-.543 1.022.094-.068.439-.091.439-.091-.252.227-.698.879-.698.879l.467-.125c-.467.375-.604.855-.604.855l.234-.057c-.253.216-.469.965-.469.965l.159-.08c-.299.522-.457 1.396-.457 1.396s-.159-.874-.458-1.396l.159.08s-.216-.749-.468-.965l.233.057s-.137-.48-.604-.855l.467.125s-.446-.652-.698-.879c0 0 .346.023.439.091 0 0-.13-.67-.543-1.022 0 0 .342.035.454.125 0 0-.276-.581-.827-1.137 0 0 .299.057.429.182 0 0-.258-.626-.603-1.023 0 0 .348.11.441.234 0 0-.261-.675-.55-1.038 0 0 .261.068.345.147 0 0-.383-.715-.635-.953 0 0 .746-.323 2.419-.323S.635-.953.635-.953C.383-.715 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(465.897 185.148)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.067-.063.274-.117.274-.117-.23.288-.437.823-.437.823C-.089.607.187.52.187.52c-.273.314-.478.81-.478.81.104-.099.34-.144.34-.144-.436.44-.654.9-.654.9.088-.072.359-.099.359-.099-.327.279-.43.809-.43.809.074-.054.347-.072.347-.072-.199.18-.552.696-.552.696l.369-.099c-.369.297-.478.677-.478.677l.185-.045c-.199.17-.371.763-.371.763l.126-.062c-.236.413-.362 1.105-.362 1.105s-.126-.692-.362-1.105l.126.062s-.172-.593-.371-.763l.185.045s-.109-.38-.478-.677l.369.099s-.353-.516-.552-.696c0 0 .273.018.347.072 0 0-.103-.53-.43-.809 0 0 .271.027.359.099 0 0-.218-.46-.654-.9 0 0 .236.045.34.144 0 0-.205-.496-.478-.81 0 0 .276.087.35.186 0 0-.207-.535-.437-.823 0 0 .207.054.274.117 0 0-.303-.566-.503-.755 0 0 .59-.255 1.915-.255 1.325 0 1.915.255 1.915.255C.303-.566 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(564.65 192.629)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.118-.126.485-.233.485-.233C.079.341-.288 1.41-.288 1.41c.131-.197.62-.371.62-.371-.485.629-.848 1.618-.848 1.618.184-.197.603-.287.603-.287-.773.879-1.16 1.799-1.16 1.799.157-.144.636-.197.636-.197-.58.555-.762 1.615-.762 1.615.131-.108.616-.143.616-.143-.354.359-.98 1.39-.98 1.39l.655-.197c-.655.592-.847 1.351-.847 1.351l.328-.089c-.354.341-.658 1.525-.658 1.525l.223-.125c-.419.826-.642 2.208-.642 2.208s-.223-1.382-.642-2.208l.223.125s-.304-1.184-.658-1.525l.328.089s-.192-.759-.848-1.351l.656.197s-.626-1.031-.98-1.39c0 0 .485.035.616.143 0 0-.182-1.06-.762-1.615 0 0 .479.053.636.197 0 0-.387-.92-1.16-1.799 0 0 .419.09.603.287 0 0-.363-.989-.848-1.618 0 0 .489.174.62.371 0 0-.367-1.069-.773-1.643 0 0 .367.107.485.233 0 0-.538-1.131-.892-1.508 0 0 1.047-.511 3.396-.511s3.396.511 3.396.511C.538-1.131 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(621.851 203.846)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.124-.193.509-.358.509-.358-.426.881-.811 2.522-.811 2.522.137-.303.65-.569.65-.569-.509.965-.889 2.483-.889 2.483.192-.303.633-.441.633-.441-.812 1.351-1.218 2.762-1.218 2.762.165-.22.668-.303.668-.303-.608.853-.8 2.48-.8 2.48.138-.165.647-.221.647-.221-.371.552-1.029 2.135-1.029 2.135l.688-.303c-.688.909-.889 2.075-.889 2.075l.344-.138c-.371.524-.69 2.342-.69 2.342l.234-.193c-.44 1.268-.674 3.39-.674 3.39s-.233-2.122-.673-3.39l.234.193s-.319-1.818-.69-2.342l.344.138s-.201-1.166-.889-2.075l.688.303s-.658-1.583-1.029-2.135c0 0 .509.056.646.221 0 0-.191-1.627-.799-2.48 0 0 .503.083.668.303 0 0-.406-1.411-1.218-2.762 0 0 .44.138.633.441 0 0-.38-1.518-.889-2.483 0 0 .513.266.65.569 0 0-.385-1.641-.811-2.522 0 0 .385.165.509.358 0 0-.564-1.736-.935-2.315 0 0 1.098-.784 3.561-.784 2.464 0 3.562.784 3.562.784C.564-1.736 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(638.5 201.39)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.124-.171.509-.317.509-.317-.427.78-.811 2.231-.811 2.231.137-.268.65-.503.65-.503-.509.853-.889 2.196-.889 2.196.192-.268.632-.39.632-.39A10.899 10.899 0 00-1.126 5.66c.165-.195.668-.268.668-.268-.609.754-.8 2.193-.8 2.193.138-.146.647-.195.647-.195-.371.488-1.029 1.888-1.029 1.888l.688-.268c-.688.804-.889 1.836-.889 1.836l.344-.122c-.371.463-.69 2.071-.69 2.071l.234-.17c-.44 1.121-.674 2.997-.674 2.997s-.233-1.876-.673-2.997l.233.17s-.318-1.608-.689-2.071l.344.122s-.202-1.032-.889-1.836l.687.268s-.657-1.4-1.028-1.888c0 0 .509.049.646.195 0 0-.191-1.439-.799-2.193 0 0 .503.073.668.268 0 0-.406-1.249-1.218-2.443 0 0 .44.122.633.39 0 0-.381-1.343-.889-2.196 0 0 .513.235.65.503 0 0-.385-1.451-.811-2.231 0 0 .385.146.509.317 0 0-.564-1.535-.935-2.047 0 0 1.097-.694 3.561-.694s3.562.694 3.562.694C.564-1.535 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(699.192 196.593)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.124-.171.509-.317.509-.317-.426.78-.811 2.231-.811 2.231.137-.268.65-.503.65-.503-.509.853-.889 2.196-.889 2.196.192-.268.633-.39.633-.39A10.878 10.878 0 00-1.126 5.66c.165-.195.668-.268.668-.268-.608.754-.799 2.193-.799 2.193.137-.146.646-.195.646-.195-.371.488-1.029 1.888-1.029 1.888l.688-.268c-.688.804-.889 1.835-.889 1.835l.344-.121c-.371.463-.69 2.071-.69 2.071l.234-.17c-.44 1.121-.674 2.997-.674 2.997s-.233-1.876-.673-2.997l.234.17s-.319-1.608-.69-2.071l.344.121s-.201-1.031-.889-1.835l.688.268s-.658-1.4-1.029-1.888c0 0 .509.049.646.195 0 0-.191-1.439-.799-2.193 0 0 .503.073.668.268 0 0-.406-1.249-1.218-2.443 0 0 .44.122.633.39 0 0-.38-1.343-.889-2.196 0 0 .513.235.65.503 0 0-.385-1.451-.811-2.231 0 0 .385.146.509.317 0 0-.564-1.535-.935-2.047 0 0 1.098-.694 3.561-.694 2.464 0 3.562.694 3.562.694C.564-1.535 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(574.61 194.28)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.093-.099.383-.184.383-.184-.321.453-.61 1.296-.61 1.296C-.124.956.262.82.262.82c-.383.495-.669 1.276-.669 1.276.145-.156.476-.227.476-.227-.61.694-.916 1.419-.916 1.419.124-.113.503-.155.503-.155-.458.438-.602 1.274-.602 1.274.104-.085.486-.113.486-.113-.279.283-.773 1.097-.773 1.097l.517-.156a2.38 2.38 0 00-.668 1.066l.258-.071c-.279.269-.518 1.204-.518 1.204l.175-.099c-.331.651-.506 1.742-.506 1.742s-.176-1.091-.507-1.742l.176.099s-.239-.935-.519-1.204l.259.071s-.151-.599-.668-1.066l.517.156s-.495-.814-.774-1.097c0 0 .383.028.486.113 0 0-.143-.836-.601-1.274 0 0 .378.042.502.155 0 0-.305-.725-.915-1.419 0 0 .331.071.476.227 0 0-.287-.781-.669-1.276 0 0 .386.136.489.292 0 0-.289-.843-.61-1.296 0 0 .29.085.383.184 0 0-.424-.892-.704-1.189 0 0 .826-.403 2.679-.403 1.853 0 2.678.403 2.678.403C.424-.892 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(560.237 191.663)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.085-.091.351-.169.351-.169-.294.416-.56 1.189-.56 1.189C-.114.877.24.752.24.752c-.351.454-.613 1.17-.613 1.17.133-.143.436-.208.436-.208-.559.636-.84 1.301-.84 1.301.114-.104.461-.142.461-.142-.419.401-.551 1.168-.551 1.168.095-.078.446-.104.446-.104-.257.26-.71 1.006-.71 1.006l.474-.143c-.474.428-.612.978-.612.978l.237-.065c-.256.247-.476 1.103-.476 1.103l.161-.09c-.303.597-.464 1.597-.464 1.597s-.161-1-.465-1.597l.161.09s-.219-.856-.475-1.103l.237.065s-.139-.55-.613-.978l.474.143s-.453-.746-.709-1.006c0 0 .351.026.446.104 0 0-.132-.767-.552-1.168 0 0 .347.038.461.142 0 0-.28-.665-.839-1.301 0 0 .303.065.436.208 0 0-.263-.716-.613-1.17 0 0 .353.125.448.268 0 0-.265-.773-.559-1.189 0 0 .265.078.351.169 0 0-.389-.818-.645-1.091 0 0 .757-.369 2.456-.369 1.699 0 2.456.369 2.456.369C.389-.818 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(538.07 191.948)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.085-.1.351-.185.351-.185-.294.456-.559 1.304-.559 1.304C-.114.962.24.825.24.825c-.351.499-.613 1.284-.613 1.284.133-.157.436-.228.436-.228-.559.698-.839 1.428-.839 1.428.113-.114.46-.157.46-.157-.419.441-.551 1.282-.551 1.282.095-.085.446-.114.446-.114-.256.285-.709 1.104-.709 1.104l.474-.157c-.474.471-.613 1.073-.613 1.073l.237-.071c-.256.271-.476 1.211-.476 1.211l.161-.1c-.303.656-.464 1.753-.464 1.753s-.161-1.097-.465-1.753l.162.1s-.22-.94-.476-1.211l.237.071s-.139-.602-.613-1.073l.474.157s-.453-.819-.709-1.104c0 0 .351.029.446.114 0 0-.132-.841-.551-1.282 0 0 .346.043.46.157 0 0-.28-.73-.839-1.428 0 0 .303.071.436.228 0 0-.262-.785-.613-1.284 0 0 .353.137.448.294 0 0-.265-.848-.559-1.304 0 0 .265.085.351.185 0 0-.389-.898-.645-1.197 0 0 .757-.405 2.456-.405 1.699 0 2.456.405 2.456.405C.389-.898 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(535.672 190.796)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.068-.072.279-.134.279-.134-.234.33-.445.946-.445.946C-.091.698.191.598.191.598c-.279.362-.488.932-.488.932.106-.113.347-.165.347-.165a4.267 4.267 0 00-.668 1.036c.09-.083.366-.114.366-.114-.334.32-.439.931-.439.931.076-.062.355-.083.355-.083-.204.207-.564.801-.564.801l.377-.114c-.377.341-.488.779-.488.779l.189-.052c-.204.197-.379.879-.379.879l.129-.072c-.242.475-.37 1.271-.37 1.271s-.128-.796-.37-1.271l.128.072s-.175-.682-.379-.879l.189.052s-.11-.438-.488-.779l.378.114s-.361-.594-.565-.801c0 0 .279.021.355.083 0 0-.105-.611-.439-.931 0 0 .276.031.367.114 0 0-.223-.53-.669-1.036 0 0 .242.052.348.165 0 0-.209-.57-.489-.932 0 0 .282.1.357.214 0 0-.211-.616-.445-.946 0 0 .212.062.28.134 0 0-.31-.651-.514-.868 0 0 .603-.295 1.956-.295S.513-.868.513-.868C.31-.651 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(545.713 189.101)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.085-.091.351-.169.351-.169C.057.247-.208 1.02-.208 1.02-.114.877.24.752.24.752c-.351.454-.613 1.17-.613 1.17.133-.143.436-.208.436-.208-.559.636-.839 1.301-.839 1.301.113-.104.46-.143.46-.143-.419.402-.551 1.169-.551 1.169.095-.078.446-.104.446-.104-.256.26-.709 1.006-.709 1.006l.474-.143a2.192 2.192 0 00-.613.978l.237-.065c-.256.246-.476 1.103-.476 1.103l.161-.09c-.303.597-.464 1.596-.464 1.596s-.161-.999-.465-1.596l.162.09s-.22-.857-.476-1.103l.237.065s-.139-.549-.613-.978l.474.143s-.453-.746-.709-1.006c0 0 .351.026.446.104 0 0-.132-.767-.551-1.169 0 0 .346.039.46.143 0 0-.28-.665-.839-1.301 0 0 .303.065.436.208 0 0-.262-.716-.613-1.17 0 0 .353.125.448.268 0 0-.265-.773-.559-1.189 0 0 .265.078.351.169 0 0-.389-.818-.645-1.091 0 0 .757-.369 2.456-.369 1.699 0 2.456.369 2.456.369C.389-.818 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(539.853 190.524)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.085-.091.351-.169.351-.169C.057.247-.208 1.02-.208 1.02-.114.877.24.752.24.752c-.351.454-.613 1.17-.613 1.17.133-.143.436-.208.436-.208-.559.636-.839 1.301-.839 1.301.113-.104.46-.143.46-.143-.419.402-.551 1.169-.551 1.169.095-.078.446-.104.446-.104-.256.26-.71 1.006-.71 1.006l.475-.143a2.176 2.176 0 00-.613.978l.237-.065c-.256.246-.476 1.103-.476 1.103l.161-.091c-.303.598-.464 1.597-.464 1.597s-.161-.999-.465-1.597l.161.091s-.219-.857-.475-1.103l.237.065s-.139-.55-.613-.978l.474.143s-.453-.746-.709-1.006c0 0 .351.026.446.104 0 0-.132-.767-.551-1.169 0 0 .346.039.46.143 0 0-.28-.665-.839-1.301 0 0 .303.065.436.208 0 0-.262-.716-.613-1.17 0 0 .353.125.448.268 0 0-.265-.773-.559-1.189 0 0 .265.078.351.169 0 0-.389-.818-.645-1.091 0 0 .757-.369 2.456-.369 1.699 0 2.456.369 2.456.369C.389-.818 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(571.884 195.025)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.104-.11.427-.205.427-.205C.069.3-.253 1.24-.253 1.24c.115-.174.545-.326.545-.326-.427.552-.746 1.422-.746 1.422.162-.173.531-.252.531-.252A6.528 6.528 0 00-.944 3.666c.138-.126.56-.174.56-.174-.51.489-.67 1.421-.67 1.421.115-.095.542-.127.542-.127-.312.316-.862 1.223-.862 1.223l.576-.173a2.662 2.662 0 00-.745 1.188l.288-.079c-.311.3-.578 1.342-.578 1.342l.196-.11c-.369.726-.565 1.941-.565 1.941s-.196-1.215-.565-1.941l.196.11s-.266-1.042-.578-1.342l.288.079s-.168-.667-.745-1.188l.577.173s-.551-.907-.862-1.223c0 0 .426.032.541.127 0 0-.16-.932-.67-1.421 0 0 .422.048.56.174 0 0-.34-.809-1.02-1.582 0 0 .368.079.53.252 0 0-.319-.87-.746-1.422 0 0 .43.152.546.326 0 0-.323-.94-.68-1.445 0 0 .322.095.426.205 0 0-.472-.994-.784-1.326 0 0 .921-.449 2.986-.449 2.066 0 2.986.449 2.986.449C.473-.994 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(614.14 202.532)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.109-.162.448-.302.448-.302-.375.743-.714 2.125-.714 2.125.121-.255.572-.479.572-.479-.447.812-.782 2.091-.782 2.091.17-.255.557-.371.557-.371A10.757 10.757 0 00-.99 5.39c.145-.186.587-.255.587-.255-.535.718-.703 2.089-.703 2.089.121-.14.569-.186.569-.186-.327.464-.905 1.798-.905 1.798l.605-.256c-.605.766-.782 1.748-.782 1.748l.303-.116c-.327.441-.607 1.973-.607 1.973l.206-.163c-.387 1.068-.593 2.855-.593 2.855s-.205-1.787-.592-2.855l.206.163s-.28-1.532-.607-1.973l.303.116s-.177-.982-.782-1.748l.605.256s-.578-1.334-.905-1.798c0 0 .448.046.569.186 0 0-.168-1.371-.703-2.089 0 0 .442.069.587.255 0 0-.357-1.189-1.071-2.326 0 0 .387.116.557.371 0 0-.335-1.279-.782-2.091 0 0 .451.224.572.479 0 0-.339-1.382-.714-2.125 0 0 .339.14.448.302 0 0-.496-1.462-.822-1.949 0 0 .965-.661 3.131-.661 2.167 0 3.132.661 3.132.661C.496-1.462 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(566.415 194.15)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.085.328-.158.328-.158C.053.23-.195.953-.195.953-.106.819.224.702.224.702c-.328.425-.573 1.093-.573 1.093.124-.133.408-.194.408-.194a4.984 4.984 0 00-.784 1.216c.106-.097.43-.134.43-.134-.392.376-.515 1.092-.515 1.092.088-.073.416-.097.416-.097-.239.243-.662.939-.662.939l.443-.133c-.443.4-.573.913-.573.913l.222-.06c-.24.23-.445 1.031-.445 1.031l.151-.085c-.284.558-.434 1.492-.434 1.492s-.15-.934-.434-1.492l.151.085s-.205-.801-.445-1.031l.222.06s-.13-.513-.573-.913l.443.133s-.423-.696-.662-.939c0 0 .328.024.416.097 0 0-.123-.716-.515-1.092 0 0 .324.037.43.134 0 0-.261-.622-.784-1.216 0 0 .284.061.408.194 0 0-.245-.668-.573-1.093 0 0 .33.117.419.251 0 0-.248-.723-.523-1.111 0 0 .248.073.328.158 0 0-.363-.764-.602-1.019 0 0 .707-.345 2.294-.345 1.587 0 2.294.345 2.294.345C.363-.764 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(542.337 190.846)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.101.328-.187.328-.187-.275.461-.523 1.318-.523 1.318C-.106.972.224.833.224.833c-.328.504-.573 1.298-.573 1.298.124-.159.408-.231.408-.231-.523.706-.784 1.443-.784 1.443.106-.115.43-.158.43-.158-.392.446-.515 1.296-.515 1.296.089-.087.416-.116.416-.116-.239.288-.662 1.115-.662 1.115l.443-.158c-.443.475-.573 1.084-.573 1.084l.222-.072c-.24.274-.445 1.224-.445 1.224l.151-.101c-.284.662-.434 1.771-.434 1.771s-.15-1.109-.434-1.771l.151.101s-.205-.95-.445-1.224l.222.072s-.13-.609-.573-1.084l.443.158s-.423-.827-.662-1.115c0 0 .328.029.416.116 0 0-.123-.85-.515-1.296 0 0 .324.043.43.158 0 0-.261-.737-.784-1.443 0 0 .284.072.408.231 0 0-.245-.794-.573-1.298 0 0 .33.139.419.298 0 0-.248-.857-.523-1.318 0 0 .248.086.328.187 0 0-.363-.907-.602-1.209 0 0 .707-.41 2.294-.41 1.587 0 2.294.41 2.294.41C.363-.907 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(497.933 180.964)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.061-.062.249-.115.249-.115C.04.167-.148.691-.148.691-.08.595.17.51.17.51c-.248.308-.434.793-.434.793.094-.097.309-.141.309-.141a3.608 3.608 0 00-.595.883c.081-.071.326-.097.326-.097-.297.272-.39.792-.39.792.067-.053.316-.07.316-.07-.182.176-.503.682-.503.682l.336-.097c-.336.29-.434.663-.434.663l.168-.044c-.181.167-.337.748-.337.748l.114-.061c-.215.404-.329 1.082-.329 1.082s-.114-.678-.329-1.082l.114.061s-.155-.581-.336-.748l.167.044s-.098-.373-.434-.663l.336.097s-.321-.506-.502-.682c0 0 .249.017.316.07 0 0-.094-.52-.391-.792 0 0 .246.026.326.097 0 0-.198-.451-.594-.883 0 0 .215.044.309.141 0 0-.186-.485-.435-.793 0 0 .251.085.318.181 0 0-.188-.524-.396-.806 0 0 .188.053.249.115 0 0-.276-.555-.457-.74 0 0 .536-.25 1.739-.25 1.204 0 1.74.25 1.74.25C.275-.555 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(503.32 180.771)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.074-.075.302-.139.302-.139-.253.342-.482.98-.482.98C-.098.723.207.62.207.62c-.302.375-.528.965-.528.965.114-.118.375-.172.375-.172a4.399 4.399 0 00-.723 1.073c.098-.085.397-.118.397-.118-.361.332-.475.964-.475.964.082-.064.384-.086.384-.086-.22.215-.611.83-.611.83l.409-.118c-.409.353-.528.806-.528.806l.204-.053c-.221.203-.41.91-.41.91l.139-.075c-.261.492-.4 1.316-.4 1.316s-.139-.824-.4-1.316l.139.075s-.189-.707-.41-.91l.205.053s-.12-.453-.528-.806l.408.118s-.39-.615-.611-.83c0 0 .302.022.384.086 0 0-.113-.632-.475-.964 0 0 .299.033.397.118 0 0-.241-.548-.723-1.073 0 0 .261.054.376.172 0 0-.226-.59-.528-.965 0 0 .304.103.386.221 0 0-.229-.638-.482-.98 0 0 .229.064.302.139 0 0-.335-.674-.555-.899 0 0 .652-.305 2.115-.305S.555-.899.555-.899C.335-.674 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(505.367 180.359)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.065-.066.267-.123.267-.123C.043.18-.158.742-.158.742c.072-.104.34-.195.34-.195-.266.331-.466.851-.466.851.101-.104.332-.151.332-.151a3.887 3.887 0 00-.638.947c.086-.076.35-.104.35-.104-.319.293-.419.85-.419.85.072-.056.339-.075.339-.075-.195.189-.539.732-.539.732l.36-.104c-.36.311-.466.711-.466.711l.18-.047c-.194.179-.361.803-.361.803l.123-.066c-.231.434-.353 1.162-.353 1.162s-.123-.728-.354-1.162l.123.066s-.167-.624-.361-.803l.18.047s-.106-.4-.466-.711l.36.104s-.344-.543-.539-.732c0 0 .267.019.339.075 0 0-.1-.557-.419-.85 0 0 .264.028.35.104 0 0-.213-.484-.638-.947 0 0 .231.047.332.151 0 0-.2-.52-.466-.851 0 0 .268.091.34.195 0 0-.201-.562-.425-.865 0 0 .202.057.267.123 0 0-.296-.595-.49-.794 0 0 .575-.268 1.867-.268 1.291 0 1.866.268 1.866.268C.296-.595 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(550.813 189.01)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.073-.093.302-.172.302-.172-.253.424-.481 1.214-.481 1.214C-.098.896.207.768.207.768c-.302.464-.528 1.195-.528 1.195.114-.146.375-.212.375-.212-.481.65-.722 1.329-.722 1.329.098-.106.396-.146.396-.146-.361.411-.474 1.194-.474 1.194.081-.08.383-.106.383-.106-.22.265-.61 1.027-.61 1.027l.408-.146c-.408.438-.527.999-.527.999l.204-.067c-.221.252-.41 1.128-.41 1.128l.139-.093c-.261.61-.4 1.631-.4 1.631s-.138-1.021-.4-1.631l.139.093s-.189-.876-.409-1.128l.204.067s-.119-.561-.528-.999l.409.146s-.39-.762-.611-1.027c0 0 .302.026.384.106 0 0-.113-.783-.475-1.194 0 0 .299.04.397.146 0 0-.241-.679-.723-1.329 0 0 .261.066.376.212 0 0-.226-.731-.528-1.195 0 0 .304.128.386.274 0 0-.228-.79-.481-1.214 0 0 .228.079.302.172 0 0-.335-.836-.555-1.114 0 0 .651-.378 2.113-.378s2.114.378 2.114.378C.335-.836 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(577.521 191.508)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.089-.107.367-.2.367-.2C.06.292-.218 1.207-.218 1.207-.119 1.038.251.89.251.89c-.367.538-.641 1.385-.641 1.385.139-.169.456-.246.456-.246A6.54 6.54 0 00-.812 3.57c.119-.123.482-.17.482-.17-.439.476-.576 1.384-.576 1.384.099-.092.466-.123.466-.123-.268.307-.742 1.19-.742 1.19l.496-.169c-.496.507-.641 1.158-.641 1.158l.248-.077c-.268.292-.497 1.306-.497 1.306l.168-.107c-.317.707-.485 1.89-.485 1.89s-.169-1.183-.486-1.89l.168.107s-.229-1.014-.497-1.306l.248.077s-.145-.651-.641-1.158l.496.169s-.474-.883-.741-1.19c0 0 .367.031.466.123 0 0-.138-.908-.577-1.384 0 0 .363.047.482.17 0 0-.293-.788-.878-1.541 0 0 .317.077.456.246 0 0-.274-.847-.641-1.385 0 0 .37.148.469.317 0 0-.277-.915-.585-1.407 0 0 .278.093.367.2 0 0-.406-.968-.674-1.291 0 0 .792-.438 2.568-.438s2.567.438 2.567.438C.406-.968 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(580.742 194.925)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.091-.107.375-.198.375-.198C.061.29-.223 1.199-.223 1.199c.102-.168.48-.316.48-.316-.375.535-.655 1.375-.655 1.375.141-.167.465-.244.465-.244a6.449 6.449 0 00-.896 1.53c.121-.122.492-.168.492-.168-.448.472-.589 1.373-.589 1.373.101-.091.476-.122.476-.122-.274.305-.758 1.182-.758 1.182l.507-.168c-.507.504-.655 1.149-.655 1.149l.254-.076c-.274.29-.508 1.297-.508 1.297l.172-.107c-.324.702-.496 1.877-.496 1.877s-.172-1.175-.497-1.877l.173.107s-.235-1.007-.508-1.297l.253.076s-.148-.645-.655-1.149l.507.168s-.484-.877-.758-1.182c0 0 .375.031.476.122 0 0-.14-.901-.589-1.373 0 0 .371.046.492.168 0 0-.299-.782-.896-1.53 0 0 .324.077.466.244 0 0-.281-.84-.655-1.375 0 0 .377.148.479.316 0 0-.284-.909-.598-1.397 0 0 .284.091.375.198 0 0-.415-.961-.689-1.282 0 0 .809-.434 2.624-.434 1.814 0 2.623.434 2.623.434C.415-.961 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(617.758 203.799)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.143.393-.265.393-.265-.329.652-.627 1.866-.627 1.866.107-.225.503-.421.503-.421-.393.713-.687 1.836-.687 1.836.149-.224.489-.326.489-.326A9.473 9.473 0 00-.87 4.733c.128-.163.516-.225.516-.225-.47.631-.617 1.834-.617 1.834.106-.122.499-.163.499-.163-.287.408-.795 1.579-.795 1.579l.531-.224c-.531.672-.686 1.534-.686 1.534l.265-.102c-.286.388-.532 1.733-.532 1.733l.18-.143c-.34.937-.52 2.506-.52 2.506s-.181-1.569-.521-2.506l.181.143s-.246-1.345-.533-1.733l.266.102s-.156-.862-.687-1.534l.531.224s-.507-1.171-.794-1.579c0 0 .393.041.499.163 0 0-.147-1.203-.618-1.834 0 0 .389.062.517.225 0 0-.314-1.044-.941-2.043 0 0 .34.102.489.326 0 0-.294-1.123-.687-1.836 0 0 .396.196.502.421 0 0-.297-1.214-.626-1.866 0 0 .297.122.393.265 0 0-.436-1.284-.723-1.712 0 0 .848-.58 2.752-.58 1.903 0 2.751.58 2.751.58C.436-1.284 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(658.852 194.505)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.143.393-.265.393-.265-.329.652-.627 1.866-.627 1.866.107-.224.503-.421.503-.421-.393.713-.687 1.836-.687 1.836.149-.224.489-.326.489-.326A9.473 9.473 0 00-.87 4.733c.128-.163.516-.225.516-.225-.47.631-.617 1.834-.617 1.834.106-.122.499-.163.499-.163-.287.408-.795 1.579-.795 1.579l.532-.224c-.532.672-.687 1.534-.687 1.534l.266-.102c-.287.388-.533 1.733-.533 1.733l.18-.143c-.34.937-.52 2.506-.52 2.506s-.181-1.569-.52-2.506l.18.143s-.246-1.345-.533-1.733l.266.102s-.156-.862-.687-1.534l.531.224s-.507-1.171-.794-1.579c0 0 .393.041.499.163 0 0-.147-1.203-.617-1.834 0 0 .388.062.516.225 0 0-.314-1.044-.941-2.043 0 0 .34.102.489.326 0 0-.294-1.123-.687-1.836 0 0 .396.197.502.421 0 0-.297-1.214-.626-1.866 0 0 .297.122.393.265 0 0-.436-1.284-.723-1.712 0 0 .849-.58 2.752-.58 1.903 0 2.751.58 2.751.58C.436-1.284 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(655.209 195.231)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.11-.165.453-.305.453-.305-.379.752-.722 2.151-.722 2.151.122-.259.579-.486.579-.486-.453.823-.792 2.118-.792 2.118.172-.258.564-.376.564-.376a10.921 10.921 0 00-1.085 2.356c.147-.188.595-.259.595-.259-.542.727-.712 2.115-.712 2.115.122-.141.576-.188.576-.188-.331.47-.917 1.82-.917 1.82l.613-.258c-.613.775-.792 1.769-.792 1.769l.306-.117c-.33.446-.614 1.997-.614 1.997l.208-.164c-.392 1.081-.6 2.89-.6 2.89s-.208-1.809-.6-2.89l.208.164s-.283-1.551-.614-1.997l.306.117s-.179-.994-.792-1.769l.613.258s-.586-1.35-.916-1.82c0 0 .453.047.575.188 0 0-.17-1.388-.712-2.115 0 0 .448.071.595.259 0 0-.362-1.204-1.084-2.356 0 0 .392.118.563.376 0 0-.339-1.295-.792-2.118 0 0 .457.227.579.486 0 0-.342-1.399-.722-2.151 0 0 .343.14.453.305 0 0-.502-1.48-.833-1.974 0 0 .978-.669 3.173-.669 2.195 0 3.173.669 3.173.669C.502-1.48 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(702.797 198.863)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.127-.19.523-.353.523-.353-.438.869-.834 2.485-.834 2.485.141-.299.669-.561.669-.561-.523.95-.915 2.446-.915 2.446.198-.298.651-.434.651-.434a12.604 12.604 0 00-1.253 2.72c.17-.217.688-.298.688-.298-.626.84-.823 2.442-.823 2.442.142-.162.665-.217.665-.217-.382.543-1.058 2.103-1.058 2.103l.707-.299c-.707.896-.914 2.044-.914 2.044l.354-.136c-.382.516-.71 2.307-.71 2.307l.24-.19c-.452 1.249-.693 3.339-.693 3.339s-.24-2.09-.693-3.339l.241.19s-.328-1.791-.71-2.307l.354.136s-.207-1.148-.915-2.044l.708.299s-.676-1.56-1.058-2.103c0 0 .523.055.665.217 0 0-.197-1.602-.823-2.442 0 0 .517.081.687.298 0 0-.418-1.39-1.253-2.72 0 0 .453.136.651.434 0 0-.391-1.496-.914-2.446 0 0 .527.262.669.561 0 0-.396-1.616-.835-2.485 0 0 .396.163.524.353 0 0-.58-1.71-.962-2.28 0 0 1.129-.772 3.664-.772 2.536 0 3.665.772 3.665.772C.58-1.71 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(695.221 196.316)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.098-.146.403-.272.403-.272-.338.669-.642 1.914-.642 1.914.109-.23.515-.432.515-.432-.403.731-.705 1.883-.705 1.883.153-.23.502-.334.502-.334a9.704 9.704 0 00-.965 2.095c.131-.168.529-.23.529-.23-.482.647-.633 1.881-.633 1.881.109-.126.512-.168.512-.168-.294.418-.815 1.619-.815 1.619l.545-.23c-.545.69-.704 1.574-.704 1.574l.272-.105c-.294.398-.546 1.777-.546 1.777l.185-.146c-.349.961-.534 2.57-.534 2.57s-.185-1.609-.534-2.57l.185.146s-.252-1.379-.546-1.777l.273.105s-.16-.884-.705-1.574l.545.23s-.52-1.201-.815-1.619c0 0 .403.042.512.168 0 0-.151-1.234-.633-1.881 0 0 .398.062.529.23 0 0-.322-1.071-.964-2.095 0 0 .348.104.501.334 0 0-.302-1.152-.705-1.883 0 0 .407.202.516.432 0 0-.305-1.245-.643-1.914 0 0 .305.126.403.272 0 0-.447-1.317-.741-1.755 0 0 .87-.595 2.822-.595s2.822.595 2.822.595C.447-1.317 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(682.462 200.213)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.164-.245.674-.454.674-.454C.109.664-.401 2.745-.401 2.745c.183-.385.862-.722.862-.722C-.213 3.246-.717 5.172-.717 5.172c.255-.384.838-.559.838-.559a16.21 16.21 0 00-1.613 3.503c.219-.28.885-.385.885-.385-.806 1.082-1.059 3.145-1.059 3.145.182-.21.856-.279.856-.279-.492.699-1.362 2.706-1.362 2.706l.911-.384c-.911 1.153-1.178 2.632-1.178 2.632l.456-.175c-.492.664-.914 2.97-.914 2.97l.31-.244C-3.17 19.709-3.48 22.4-3.48 22.4s-.309-2.691-.892-4.298l.31.244s-.422-2.306-.914-2.97l.455.175s-.266-1.479-1.177-2.632l.911.384s-.871-2.007-1.363-2.706c0 0 .674.069.857.279 0 0-.253-2.063-1.06-3.145 0 0 .667.105.885.385 0 0-.538-1.791-1.613-3.503 0 0 .584.175.839.559 0 0-.504-1.926-1.179-3.149 0 0 .68.337.862.722 0 0-.51-2.081-1.074-3.199 0 0 .51.209.674.454 0 0-.747-2.202-1.239-2.936 0 0 1.454-.994 4.718-.994 3.264 0 4.719.994 4.719.994C.747-2.202 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(692.05 197.364)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.127-.19.524-.353.524-.353-.439.869-.835 2.485-.835 2.485.141-.299.669-.561.669-.561-.523.95-.915 2.446-.915 2.446.198-.298.651-.434.651-.434a12.604 12.604 0 00-1.253 2.72c.17-.217.688-.298.688-.298-.626.84-.823 2.442-.823 2.442.141-.162.665-.217.665-.217-.382.543-1.058 2.103-1.058 2.103l.707-.299c-.707.896-.914 2.044-.914 2.044l.354-.136c-.382.516-.71 2.307-.71 2.307l.24-.19c-.452 1.249-.693 3.339-.693 3.339s-.24-2.09-.693-3.339l.241.19s-.328-1.791-.71-2.307l.354.136s-.207-1.148-.915-2.044l.708.299s-.676-1.56-1.058-2.103c0 0 .523.055.665.217 0 0-.197-1.602-.823-2.442 0 0 .517.081.687.298 0 0-.417-1.39-1.252-2.72 0 0 .452.136.65.434 0 0-.391-1.496-.914-2.446 0 0 .527.262.669.561 0 0-.396-1.616-.835-2.485 0 0 .396.163.524.353 0 0-.58-1.71-.962-2.28 0 0 1.129-.772 3.664-.772 2.536 0 3.665.772 3.665.772C.58-1.71 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(644.943 198.103)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.143.393-.265.393-.265-.329.652-.627 1.866-.627 1.866.107-.224.503-.421.503-.421-.393.713-.687 1.836-.687 1.836.149-.224.489-.326.489-.326A9.473 9.473 0 00-.87 4.733c.128-.163.516-.225.516-.225-.47.631-.618 1.834-.618 1.834.107-.122.5-.163.5-.163-.287.408-.795 1.579-.795 1.579l.531-.224c-.531.672-.686 1.534-.686 1.534l.265-.102c-.286.388-.532 1.732-.532 1.732l.18-.142c-.34.937-.52 2.506-.52 2.506s-.181-1.569-.521-2.506l.181.142s-.246-1.344-.533-1.732l.266.102s-.156-.862-.687-1.534l.531.224s-.507-1.171-.794-1.579c0 0 .393.041.499.163 0 0-.147-1.203-.618-1.834 0 0 .389.062.517.225 0 0-.314-1.044-.941-2.043 0 0 .34.102.489.326 0 0-.294-1.123-.687-1.836 0 0 .396.197.502.421 0 0-.297-1.214-.626-1.866 0 0 .297.122.393.265 0 0-.436-1.284-.723-1.712 0 0 .848-.58 2.752-.58 1.903 0 2.751.58 2.751.58C.436-1.284 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(607.387 200.274)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.074-.11.303-.204.303-.204C.049.298-.18 1.233-.18 1.233-.098 1.06.207.909.207.909c-.303.549-.529 1.414-.529 1.414.115-.173.377-.251.377-.251-.483.769-.725 1.573-.725 1.573.098-.125.397-.172.397-.172-.362.485-.475 1.412-.475 1.412.082-.094.384-.125.384-.125-.221.314-.612 1.215-.612 1.215l.41-.172c-.41.518-.529 1.182-.529 1.182l.204-.079c-.221.298-.41 1.334-.41 1.334l.139-.11c-.262.722-.401 1.931-.401 1.931s-.139-1.209-.401-1.931l.139.11s-.189-1.036-.41-1.334l.205.079s-.12-.664-.529-1.182l.409.172s-.391-.901-.612-1.215c0 0 .303.031.384.125 0 0-.113-.927-.475-1.412 0 0 .299.047.397.172 0 0-.241-.804-.724-1.573 0 0 .262.078.376.251 0 0-.226-.865-.529-1.414 0 0 .305.151.387.324 0 0-.229-.935-.483-1.437 0 0 .23.094.303.204 0 0-.335-.989-.556-1.318 0 0 .653-.447 2.119-.447 1.466 0 2.12.447 2.12.447C.336-.989 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(641.665 200.883)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.088-.132.363-.245.363-.245-.304.602-.579 1.723-.579 1.723.099-.207.464-.389.464-.389-.363.659-.634 1.696-.634 1.696.137-.207.451-.301.451-.301-.578.922-.868 1.886-.868 1.886.118-.151.476-.207.476-.207-.434.583-.57 1.694-.57 1.694.098-.113.461-.151.461-.151-.265.376-.734 1.458-.734 1.458l.491-.207c-.491.621-.634 1.417-.634 1.417l.245-.094c-.265.357-.492 1.599-.492 1.599l.167-.132c-.314.866-.481 2.315-.481 2.315s-.166-1.449-.48-2.315l.166.132s-.227-1.242-.492-1.599l.246.094s-.144-.796-.634-1.417l.49.207s-.469-1.082-.733-1.458c0 0 .363.038.461.151 0 0-.137-1.111-.571-1.694 0 0 .359.056.477.207 0 0-.29-.964-.869-1.886 0 0 .314.094.452.301 0 0-.272-1.037-.635-1.696 0 0 .366.182.464.389 0 0-.274-1.121-.578-1.723 0 0 .274.113.363.245 0 0-.403-1.186-.667-1.581 0 0 .783-.535 2.54-.535 1.758 0 2.541.535 2.541.535C.402-1.186 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(684.445 200.584)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.088-.132.363-.245.363-.245-.304.602-.579 1.723-.579 1.723.099-.207.464-.389.464-.389-.363.659-.634 1.696-.634 1.696.137-.207.451-.301.451-.301-.578.922-.868 1.886-.868 1.886.118-.15.476-.207.476-.207-.434.583-.57 1.694-.57 1.694.098-.113.461-.151.461-.151-.265.376-.734 1.458-.734 1.458l.491-.207c-.491.621-.634 1.417-.634 1.417l.245-.094c-.265.357-.492 1.599-.492 1.599l.167-.132c-.314.866-.481 2.315-.481 2.315s-.166-1.449-.48-2.315l.166.132s-.227-1.242-.492-1.599l.246.094s-.144-.796-.634-1.417l.49.207s-.469-1.082-.733-1.458c0 0 .363.038.461.151 0 0-.137-1.111-.571-1.694 0 0 .359.057.477.207 0 0-.29-.964-.869-1.886 0 0 .314.094.452.301 0 0-.272-1.037-.635-1.696 0 0 .366.182.464.389 0 0-.274-1.121-.578-1.723 0 0 .274.113.363.245 0 0-.403-1.186-.667-1.581 0 0 .783-.535 2.54-.535 1.758 0 2.541.535 2.541.535C.402-1.186 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(548.765 190.228)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.091-.107.375-.198.375-.198C.061.29-.223 1.199-.223 1.199c.102-.168.479-.316.479-.316-.374.534-.654 1.375-.654 1.375.141-.167.466-.244.466-.244-.598.748-.897 1.53-.897 1.53.121-.122.492-.168.492-.168-.448.472-.589 1.373-.589 1.373.101-.091.476-.122.476-.122-.274.305-.758 1.182-.758 1.182l.507-.168c-.507.504-.655 1.149-.655 1.149l.253-.076c-.273.29-.508 1.297-.508 1.297l.173-.107c-.324.702-.496 1.877-.496 1.877s-.173-1.175-.497-1.877l.173.107s-.235-1.007-.508-1.297l.253.076s-.148-.645-.655-1.149l.507.168s-.484-.877-.758-1.182c0 0 .375.031.476.122 0 0-.14-.901-.589-1.373 0 0 .371.046.492.168 0 0-.299-.782-.896-1.53 0 0 .324.077.466.244 0 0-.281-.841-.655-1.375 0 0 .377.148.479.316 0 0-.284-.909-.598-1.397 0 0 .284.091.375.198 0 0-.415-.961-.689-1.282 0 0 .809-.434 2.624-.434 1.814 0 2.623.434 2.623.434C.415-.961 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(610.77 201.123)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.143.393-.265.393-.265-.329.652-.626 1.866-.626 1.866.106-.224.502-.421.502-.421-.393.713-.687 1.836-.687 1.836.149-.224.489-.326.489-.326A9.473 9.473 0 00-.87 4.733c.128-.163.516-.225.516-.225-.47.631-.617 1.834-.617 1.834.106-.122.499-.163.499-.163-.287.408-.795 1.579-.795 1.579l.532-.224c-.532.672-.687 1.534-.687 1.534l.266-.102c-.287.388-.533 1.733-.533 1.733l.18-.143c-.34.937-.52 2.506-.52 2.506s-.181-1.569-.52-2.506l.18.143s-.246-1.345-.533-1.733l.266.102s-.156-.862-.687-1.534l.531.224s-.507-1.171-.794-1.579c0 0 .393.041.499.163 0 0-.147-1.203-.617-1.834 0 0 .388.062.516.225 0 0-.314-1.044-.941-2.043 0 0 .34.102.489.326 0 0-.294-1.123-.687-1.836 0 0 .396.197.502.421 0 0-.297-1.214-.626-1.866 0 0 .297.122.393.265 0 0-.436-1.284-.723-1.712 0 0 .849-.58 2.752-.58 1.903 0 2.752.58 2.752.58C.436-1.284 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(705.256 197.249)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.096-.143.393-.265.393-.265-.329.652-.627 1.866-.627 1.866.107-.224.503-.421.503-.421-.393.713-.687 1.836-.687 1.836.149-.224.489-.326.489-.326A9.473 9.473 0 00-.87 4.733c.128-.163.516-.225.516-.225-.47.631-.617 1.834-.617 1.834.106-.122.499-.163.499-.163-.287.408-.795 1.579-.795 1.579l.532-.224c-.532.672-.687 1.534-.687 1.534l.266-.102c-.287.388-.533 1.733-.533 1.733l.18-.143c-.34.937-.52 2.506-.52 2.506s-.181-1.569-.521-2.506l.181.143s-.246-1.345-.533-1.733l.266.102s-.156-.862-.687-1.534l.531.224s-.507-1.171-.794-1.579c0 0 .393.041.499.163 0 0-.147-1.203-.617-1.834 0 0 .388.062.516.225 0 0-.314-1.044-.941-2.043 0 0 .34.102.489.326 0 0-.294-1.123-.687-1.836 0 0 .396.197.502.421 0 0-.297-1.214-.626-1.866 0 0 .297.122.393.265 0 0-.436-1.284-.723-1.712 0 0 .848-.58 2.752-.58 1.903 0 2.751.58 2.751.58C.436-1.284 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(532.355 191.054)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.078-.091.321-.17.321-.17-.269.419-.512 1.197-.512 1.197C-.104.883.22.757.22.757c-.321.458-.561 1.179-.561 1.179.121-.144.399-.21.399-.21-.512.641-.769 1.311-.769 1.311.104-.104.422-.144.422-.144-.384.405-.505 1.177-.505 1.177.087-.078.408-.104.408-.104-.234.261-.649 1.013-.649 1.013l.434-.144c-.434.431-.561.985-.561.985l.217-.066c-.234.249-.435 1.112-.435 1.112l.147-.092c-.277.602-.425 1.609-.425 1.609s-.147-1.007-.425-1.609l.147.092s-.201-.863-.435-1.112l.217.066s-.127-.554-.561-.985l.434.144s-.415-.752-.649-1.013c0 0 .321.026.408.104 0 0-.121-.772-.505-1.177 0 0 .318.04.422.144 0 0-.257-.67-.769-1.311 0 0 .278.066.4.21 0 0-.241-.721-.562-1.179 0 0 .324.126.411.27 0 0-.243-.778-.512-1.197 0 0 .243.079.321.17 0 0-.356-.824-.59-1.098 0 0 .693-.373 2.248-.373 1.555 0 2.248.373 2.248.373C.356-.824 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(568.315 192.918)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.072-.085.297-.157.297-.157C.048.23-.176.949-.176.949c.08-.133.379-.25.379-.25-.297.423-.518 1.089-.518 1.089.112-.133.368-.193.368-.193-.473.592-.71 1.211-.71 1.211.097-.097.39-.133.39-.133-.355.374-.466 1.087-.466 1.087.08-.073.377-.097.377-.097-.217.242-.6.936-.6.936l.401-.133c-.401.399-.518.91-.518.91l.2-.061c-.216.23-.402 1.027-.402 1.027l.136-.084c-.256.555-.392 1.485-.392 1.485s-.137-.93-.393-1.485l.136.084s-.186-.797-.402-1.027l.2.061s-.117-.511-.518-.91l.401.133s-.383-.694-.6-.936c0 0 .297.024.377.097 0 0-.111-.713-.466-1.087 0 0 .293.036.39.133 0 0-.237-.619-.71-1.211 0 0 .256.06.368.193 0 0-.221-.666-.518-1.089 0 0 .299.117.379.25 0 0-.224-.719-.473-1.106 0 0 .225.072.297.157 0 0-.329-.761-.545-1.015 0 0 .64-.344 2.077-.344 1.436 0 2.076.344 2.076.344C.329-.761 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(623.906 203.773)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.076-.113.311-.21.311-.21C.05.306-.185 1.267-.185 1.267-.101 1.09.213.934.213.934c-.311.565-.544 1.454-.544 1.454.118-.178.387-.258.387-.258-.496.79-.745 1.617-.745 1.617.101-.129.409-.178.409-.178-.372.5-.489 1.452-.489 1.452.084-.097.395-.129.395-.129-.227.323-.629 1.25-.629 1.25l.421-.178c-.421.533-.544 1.215-.544 1.215l.21-.08c-.227.306-.421 1.371-.421 1.371l.143-.113c-.27.742-.412 1.984-.412 1.984s-.143-1.242-.413-1.984l.143.113s-.194-1.065-.421-1.371l.21.08s-.123-.682-.544-1.215l.421.178s-.402-.927-.629-1.25c0 0 .311.032.395.129 0 0-.117-.952-.489-1.452 0 0 .308.049.409.178 0 0-.249-.827-.745-1.617 0 0 .269.08.387.258 0 0-.233-.889-.544-1.454 0 0 .314.156.398.333 0 0-.235-.961-.496-1.477 0 0 .235.097.311.21 0 0-.345-1.016-.572-1.355 0 0 .672-.459 2.179-.459 1.506 0 2.178.459 2.178.459C.345-1.016 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(432.35 182.716)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.073-.087.302-.161.302-.161C.049.236-.18.974-.18.974-.098.838.207.718.207.718c-.302.434-.528 1.118-.528 1.118.114-.137.375-.199.375-.199-.482.608-.723 1.244-.723 1.244.098-.1.397-.137.397-.137-.361.384-.475 1.116-.475 1.116.082-.074.384-.099.384-.099-.22.248-.611.961-.611.961l.409-.136c-.409.409-.528.934-.528.934l.204-.062c-.221.235-.41 1.054-.41 1.054l.139-.087c-.261.571-.4 1.526-.4 1.526s-.139-.955-.4-1.526l.139.087s-.189-.819-.41-1.054l.205.062s-.12-.525-.528-.934l.408.136s-.39-.713-.611-.961c0 0 .302.025.384.099 0 0-.113-.732-.475-1.116 0 0 .299.037.397.137 0 0-.241-.636-.723-1.244 0 0 .261.062.376.199 0 0-.226-.684-.529-1.118 0 0 .305.12.387.256 0 0-.229-.738-.482-1.135 0 0 .229.074.302.161 0 0-.335-.781-.555-1.042 0 0 .652-.353 2.115-.353s2.115.353 2.115.353C.335-.781 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(130.664 185.705)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.134.355-.249.355-.249-.298.614-.566 1.756-.566 1.756.096-.211.454-.397.454-.397-.355.672-.62 1.729-.62 1.729.134-.211.441-.307.441-.307-.566.94-.849 1.923-.849 1.923.115-.154.466-.211.466-.211-.425.593-.558 1.726-.558 1.726.096-.115.451-.154.451-.154-.259.384-.718 1.486-.718 1.486l.48-.211c-.48.633-.62 1.445-.62 1.445l.24-.096c-.259.364-.481 1.63-.481 1.63l.163-.134c-.307.882-.47 2.359-.47 2.359s-.163-1.477-.469-2.359l.162.134s-.222-1.266-.481-1.63l.24.096s-.14-.812-.62-1.445l.48.211s-.458-1.102-.717-1.486c0 0 .355.039.451.154 0 0-.134-1.133-.558-1.726 0 0 .351.057.466.211 0 0-.283-.983-.849-1.923 0 0 .307.096.441.307 0 0-.265-1.057-.62-1.729 0 0 .357.186.453.397 0 0-.268-1.142-.565-1.756 0 0 .268.115.355.249 0 0-.394-1.208-.653-1.611 0 0 .766-.546 2.484-.546s2.484.546 2.484.546C.393-1.208 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(140.729 188.636)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.065-.085.267-.158.267-.158C.043.231-.159.956-.159.956-.087.822.183.704.183.704c-.267.426-.467 1.097-.467 1.097.101-.134.332-.195.332-.195-.426.596-.639 1.219-.639 1.219.087-.097.351-.134.351-.134-.32.377-.42 1.095-.42 1.095.072-.073.339-.097.339-.097-.195.243-.54.942-.54.942l.361-.134c-.361.402-.466.916-.466.916l.18-.06c-.195.231-.362 1.034-.362 1.034l.123-.085c-.231.559-.354 1.496-.354 1.496s-.122-.937-.353-1.496l.122.085s-.167-.803-.362-1.034l.181.06s-.106-.514-.467-.916l.361.134s-.345-.699-.54-.942c0 0 .267.024.34.097 0 0-.101-.718-.42-1.095 0 0 .264.037.351.134 0 0-.214-.623-.64-1.219 0 0 .231.061.333.195 0 0-.2-.671-.467-1.097 0 0 .269.118.341.252 0 0-.202-.725-.426-1.114 0 0 .203.073.268.158 0 0-.296-.766-.491-1.022 0 0 .576-.346 1.869-.346 1.294 0 1.87.346 1.87.346C.296-.766 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(197.036 187.898)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.08-.093.328-.173.328-.173-.275.426-.523 1.219-.523 1.219C-.106.9.224.771.224.771c-.328.466-.572 1.2-.572 1.2.123-.146.407-.213.407-.213a5.604 5.604 0 00-.784 1.335c.106-.106.43-.146.43-.146-.392.412-.515 1.198-.515 1.198.089-.08.416-.106.416-.106-.239.266-.662 1.031-.662 1.031l.443-.146a2.302 2.302 0 00-.573 1.003l.222-.067c-.239.253-.444 1.132-.444 1.132l.15-.093c-.283.613-.434 1.638-.434 1.638s-.15-1.025-.434-1.638l.151.093s-.205-.879-.444-1.132l.221.067s-.13-.564-.573-1.003l.443.146s-.423-.765-.662-1.031c0 0 .328.026.416.106 0 0-.123-.786-.515-1.198 0 0 .324.04.431.146 0 0-.262-.682-.785-1.335 0 0 .284.067.408.213 0 0-.245-.734-.573-1.2 0 0 .33.129.419.275 0 0-.248-.793-.523-1.219 0 0 .248.08.328.173 0 0-.363-.839-.602-1.119 0 0 .707-.379 2.294-.379 1.587 0 2.294.379 2.294.379C.363-.839 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(234.166 182.789)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.071-.085.292-.158.292-.158C.047.231-.174.954-.174.954-.095.82.2.703.2.703c-.292.425-.511 1.094-.511 1.094.111-.133.363-.194.363-.194-.465.595-.699 1.217-.699 1.217.095-.097.384-.133.384-.133-.349.376-.459 1.092-.459 1.092.079-.072.371-.097.371-.097-.213.243-.59.941-.59.941l.394-.134c-.394.401-.51.915-.51.915l.197-.061c-.213.231-.396 1.032-.396 1.032l.135-.085c-.253.559-.387 1.494-.387 1.494s-.134-.935-.387-1.494l.134.085s-.182-.801-.396-1.032l.198.061s-.116-.514-.511-.915l.395.134s-.377-.698-.59-.941c0 0 .292.025.371.097 0 0-.11-.716-.459-1.092 0 0 .289.036.383.133 0 0-.233-.622-.699-1.217 0 0 .253.061.364.194 0 0-.219-.669-.511-1.094 0 0 .294.117.373.251 0 0-.22-.723-.465-1.112 0 0 .221.073.292.158 0 0-.324-.765-.537-1.02 0 0 .63-.346 2.045-.346S.537-1.02.537-1.02C.324-.765 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(124.517 187.248)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.139.355-.258.355-.258-.297.636-.566 1.82-.566 1.82.096-.219.454-.411.454-.411-.355.696-.62 1.791-.62 1.791.134-.218.441-.318.441-.318a9.603 9.603 0 00-.849 1.993c.115-.159.466-.219.466-.219-.425.615-.558 1.789-.558 1.789.096-.119.451-.159.451-.159-.259.398-.717 1.54-.717 1.54l.479-.219c-.479.656-.62 1.497-.62 1.497l.24-.099c-.259.378-.481 1.69-.481 1.69l.163-.14c-.307.915-.47 2.446-.47 2.446s-.163-1.531-.469-2.446l.162.14s-.222-1.312-.48-1.69l.239.099s-.14-.841-.619-1.497l.479.219s-.458-1.142-.717-1.54c0 0 .355.04.451.159 0 0-.134-1.174-.558-1.789 0 0 .351.06.466.219 0 0-.283-1.019-.849-1.993 0 0 .307.1.441.318 0 0-.265-1.095-.62-1.791 0 0 .358.192.453.411 0 0-.268-1.184-.565-1.82 0 0 .268.119.355.258 0 0-.394-1.252-.653-1.67 0 0 .766-.566 2.484-.566 1.719 0 2.484.566 2.484.566C.393-1.252 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(59.46 204.377)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.098.355-.181.355-.181-.297.446-.566 1.277-.566 1.277C-.115.942.243.807.243.807c-.355.489-.62 1.257-.62 1.257.134-.153.441-.223.441-.223-.566.684-.849 1.398-.849 1.398.115-.111.466-.153.466-.153-.425.432-.558 1.255-.558 1.255.096-.083.451-.111.451-.111-.259.279-.717 1.08-.717 1.08l.479-.153c-.479.46-.62 1.05-.62 1.05l.24-.07c-.259.265-.481 1.186-.481 1.186l.163-.098c-.307.642-.47 1.716-.47 1.716s-.163-1.074-.469-1.716l.162.098s-.222-.921-.481-1.186l.24.07s-.14-.59-.62-1.05l.48.153s-.458-.801-.717-1.08c0 0 .355.028.451.111 0 0-.134-.823-.558-1.255 0 0 .351.042.466.153 0 0-.283-.714-.849-1.398 0 0 .307.07.441.223 0 0-.265-.768-.62-1.257 0 0 .357.135.453.289 0 0-.268-.831-.565-1.277 0 0 .268.083.355.181 0 0-.394-.879-.653-1.172 0 0 .766-.397 2.484-.397 1.719 0 2.484.397 2.484.397C.393-.879 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(91.433 199.397)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.098.355-.181.355-.181-.298.446-.566 1.277-.566 1.277C-.115.942.243.807.243.807c-.355.489-.62 1.257-.62 1.257.134-.153.441-.223.441-.223-.566.684-.849 1.398-.849 1.398.115-.111.466-.153.466-.153-.425.432-.558 1.255-.558 1.255.096-.083.451-.111.451-.111-.259.279-.717 1.08-.717 1.08l.479-.153c-.479.46-.62 1.05-.62 1.05l.24-.07c-.259.265-.481 1.186-.481 1.186l.163-.098c-.307.642-.47 1.716-.47 1.716s-.163-1.074-.47-1.716l.163.098s-.222-.921-.481-1.186l.24.07s-.14-.59-.62-1.05l.48.153s-.458-.801-.717-1.08c0 0 .355.028.45.111 0 0-.133-.823-.557-1.255 0 0 .351.042.466.153 0 0-.283-.714-.849-1.398 0 0 .307.07.441.223 0 0-.265-.768-.62-1.257 0 0 .357.135.453.289 0 0-.268-.831-.565-1.277 0 0 .268.083.355.181 0 0-.394-.879-.653-1.172 0 0 .766-.397 2.484-.397 1.719 0 2.484.397 2.484.397C.393-.879 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(25.69 193.23)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.098.355-.181.355-.181-.298.446-.566 1.277-.566 1.277C-.115.942.243.807.243.807c-.355.489-.62 1.257-.62 1.257.134-.153.441-.223.441-.223-.566.684-.849 1.398-.849 1.398.115-.111.466-.153.466-.153-.425.432-.558 1.255-.558 1.255.096-.083.451-.111.451-.111-.259.279-.718 1.08-.718 1.08l.48-.153a2.38 2.38 0 00-.62 1.05l.24-.07c-.259.265-.481 1.186-.481 1.186l.163-.098c-.307.642-.47 1.716-.47 1.716s-.163-1.074-.47-1.716l.163.098s-.222-.921-.481-1.186l.24.07s-.14-.59-.62-1.05l.48.153s-.458-.801-.717-1.08c0 0 .355.028.451.111 0 0-.134-.823-.558-1.255 0 0 .351.042.466.153 0 0-.283-.714-.849-1.398 0 0 .307.07.441.223 0 0-.265-.768-.62-1.257 0 0 .357.135.453.289 0 0-.268-.831-.565-1.277 0 0 .268.083.355.181 0 0-.394-.879-.653-1.172 0 0 .766-.397 2.484-.397 1.719 0 2.484.397 2.484.397C.393-.879 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(18.165 193.817)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.079-.09.326-.167.326-.167-.273.411-.52 1.174-.52 1.174C-.106.866.223.743.223.743c-.326.448-.57 1.155-.57 1.155.123-.141.406-.205.406-.205-.521.629-.781 1.286-.781 1.286.106-.103.428-.141.428-.141-.39.397-.512 1.154-.512 1.154.088-.077.414-.103.414-.103-.238.257-.659.994-.659.994l.44-.141c-.44.423-.569.966-.569.966l.22-.064c-.238.243-.442 1.09-.442 1.09l.15-.09c-.283.59-.432 1.578-.432 1.578s-.15-.988-.432-1.578l.15.09s-.205-.847-.443-1.09l.221.064s-.129-.543-.57-.966l.441.141s-.422-.737-.66-.994c0 0 .327.026.415.103 0 0-.123-.757-.513-1.154 0 0 .323.038.428.141 0 0-.26-.657-.78-1.286 0 0 .282.064.405.205 0 0-.244-.707-.57-1.155 0 0 .329.123.417.264 0 0-.247-.763-.52-1.174 0 0 .247.077.326.167 0 0-.361-.808-.599-1.077 0 0 .704-.366 2.284-.366 1.58 0 2.284.366 2.284.366C.362-.808 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(64.521 204.969)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.07-.079.287-.147.287-.147C.046.214-.171.886-.171.886-.093.762.196.653.196.653c-.287.395-.501 1.017-.501 1.017.108-.124.357-.18.357-.18-.458.552-.687 1.13-.687 1.13.093-.09.377-.124.377-.124-.344.35-.451 1.016-.451 1.016.077-.068.364-.09.364-.09-.209.225-.58.874-.58.874l.388-.125a1.93 1.93 0 00-.501.85l.194-.056c-.21.214-.39.959-.39.959l.132-.079c-.248.519-.38 1.388-.38 1.388s-.131-.869-.38-1.388l.132.079s-.18-.745-.389-.959l.194.056s-.113-.477-.501-.85l.388.125s-.371-.649-.581-.874c0 0 .287.022.365.09 0 0-.108-.666-.451-1.016 0 0 .284.034.377.124 0 0-.229-.578-.687-1.13 0 0 .248.056.357.18 0 0-.215-.622-.502-1.017 0 0 .289.109.367.233 0 0-.217-.672-.458-1.033 0 0 .218.068.287.147 0 0-.318-.711-.527-.948 0 0 .619-.321 2.009-.321s2.01.321 2.01.321C.318-.711 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(63.287 205.982)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.07-.079.287-.147.287-.147C.047.214-.171.886-.171.886-.093.762.196.653.196.653c-.287.395-.501 1.017-.501 1.017.108-.124.357-.18.357-.18-.458.552-.687 1.13-.687 1.13.093-.09.377-.124.377-.124-.344.35-.451 1.016-.451 1.016.077-.068.364-.09.364-.09-.209.225-.58.874-.58.874l.388-.124a1.923 1.923 0 00-.501.849l.194-.056c-.21.214-.39.959-.39.959l.132-.079c-.248.519-.38 1.388-.38 1.388s-.131-.869-.38-1.388l.132.079s-.18-.745-.389-.959l.194.056s-.113-.477-.501-.849l.388.124s-.371-.649-.581-.874c0 0 .287.022.365.09 0 0-.108-.666-.451-1.016 0 0 .284.034.377.124 0 0-.229-.578-.687-1.13 0 0 .248.056.357.18 0 0-.215-.622-.502-1.017 0 0 .289.109.367.233 0 0-.217-.672-.458-1.033 0 0 .218.068.287.147 0 0-.318-.711-.527-.948 0 0 .619-.321 2.009-.321s2.01.321 2.01.321C.318-.711 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(95.684 198.943)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.122-.138.501-.256.501-.256-.42.63-.799 1.803-.799 1.803.136-.216.641-.406.641-.406-.501.689-.876 1.775-.876 1.775.19-.217.623-.316.623-.316a8.253 8.253 0 00-1.199 1.975c.162-.158.658-.217.658-.217-.599.61-.788 1.773-.788 1.773.136-.118.637-.157.637-.157C-.968 6.368-1.615 7.5-1.615 7.5l.677-.217c-.677.65-.875 1.483-.875 1.483l.339-.098c-.366.374-.68 1.674-.68 1.674l.231-.138c-.434.907-.664 2.424-.664 2.424s-.23-1.517-.664-2.424l.231.138s-.314-1.3-.679-1.674l.338.098s-.198-.833-.875-1.483l.677.217s-.647-1.132-1.013-1.526c0 0 .501.039.637.157 0 0-.189-1.163-.788-1.773 0 0 .496.059.658.217 0 0-.4-1.009-1.199-1.975 0 0 .433.099.623.316 0 0-.375-1.086-.876-1.775 0 0 .505.19.641.406 0 0-.379-1.173-.799-1.803 0 0 .379.118.501.256 0 0-.555-1.241-.921-1.655 0 0 1.081-.56 3.508-.56s3.508.56 3.508.56C.555-1.241 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(69.996 204.627)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.086-.113.355-.21.355-.21-.297.517-.566 1.481-.566 1.481.096-.178.454-.335.454-.335-.355.567-.62 1.458-.62 1.458.134-.178.441-.259.441-.259-.566.793-.849 1.622-.849 1.622.115-.13.466-.178.466-.178-.425.5-.558 1.455-.558 1.455.096-.097.451-.129.451-.129-.259.323-.717 1.253-.717 1.253l.479-.178c-.479.534-.62 1.218-.62 1.218l.24-.081c-.259.307-.481 1.375-.481 1.375l.163-.113c-.307.744-.47 1.989-.47 1.989s-.163-1.245-.47-1.989l.164.113s-.223-1.068-.481-1.375l.239.081S-2.52 6.514-3 5.98l.48.178s-.458-.93-.717-1.253c0 0 .355.032.451.129 0 0-.134-.955-.558-1.455 0 0 .351.048.466.178 0 0-.283-.829-.849-1.622 0 0 .307.081.441.259 0 0-.265-.891-.62-1.458 0 0 .357.157.453.335 0 0-.268-.964-.565-1.481 0 0 .268.097.355.21 0 0-.394-1.019-.653-1.359 0 0 .766-.46 2.484-.46 1.719 0 2.484.46 2.484.46C.393-1.019 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(53.329 201.909)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.081-.112.335-.209.335-.209C.054.305-.199 1.26-.199 1.26c.091-.176.428-.331.428-.331-.335.561-.585 1.445-.585 1.445.127-.176.416-.256.416-.256-.533.786-.8 1.607-.8 1.607.108-.128.439-.176.439-.176-.4.497-.526 1.444-.526 1.444.091-.097.425-.129.425-.129-.244.321-.676 1.243-.676 1.243l.452-.177c-.452.53-.584 1.209-.584 1.209l.226-.081c-.244.305-.453 1.364-.453 1.364l.153-.112c-.289.738-.443 1.973-.443 1.973S-1.88 9.048-2.17 8.31l.154.112s-.209-1.059-.453-1.364l.226.081s-.132-.679-.585-1.209l.453.177s-.432-.922-.677-1.243c0 0 .335.032.425.129 0 0-.125-.947-.525-1.444 0 0 .33.048.439.176 0 0-.267-.821-.801-1.607 0 0 .29.08.416.256 0 0-.25-.884-.584-1.445 0 0 .337.155.427.331 0 0-.253-.955-.533-1.469 0 0 .253.097.335.209 0 0-.371-1.011-.615-1.348 0 0 .722-.456 2.341-.456 1.62 0 2.342.456 2.342.456C.371-1.011 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(51.846 201.17)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.114-.129.47-.24.47-.24-.394.591-.749 1.691-.749 1.691.127-.203.601-.381.601-.381-.47.647-.822 1.665-.822 1.665.178-.203.585-.296.585-.296-.75.906-1.125 1.853-1.125 1.853.152-.148.617-.204.617-.204-.562.572-.739 1.663-.739 1.663.127-.111.597-.147.597-.147-.343.369-.95 1.431-.95 1.431l.635-.203c-.635.609-.821 1.391-.821 1.391l.318-.092c-.343.351-.637 1.571-.637 1.571l.216-.13c-.407.85-.623 2.273-.623 2.273s-.216-1.423-.622-2.273l.216.13s-.294-1.22-.637-1.571l.317.092s-.186-.782-.821-1.391l.635.203s-.607-1.062-.95-1.431c0 0 .47.036.598.147 0 0-.177-1.091-.739-1.663 0 0 .465.056.617.204 0 0-.375-.947-1.125-1.853 0 0 .407.093.585.296 0 0-.352-1.018-.822-1.665 0 0 .474.178.601.381 0 0-.356-1.1-.749-1.691 0 0 .355.111.47.24 0 0-.521-1.164-.864-1.552 0 0 1.014-.526 3.29-.526 2.277 0 3.291.526 3.291.526C.521-1.164 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(14.455 194.597)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.114-.137.47-.255.47-.255-.394.628-.749 1.798-.749 1.798.127-.216.601-.406.601-.406-.47.687-.822 1.77-.822 1.77.178-.216.585-.315.585-.315-.75.963-1.125 1.969-1.125 1.969.152-.157.617-.216.617-.216-.562.608-.739 1.767-.739 1.767.127-.118.597-.157.597-.157-.343.393-.95 1.521-.95 1.521l.635-.216c-.635.648-.821 1.479-.821 1.479l.318-.098c-.343.373-.637 1.669-.637 1.669l.216-.137c-.407.903-.623 2.415-.623 2.415s-.215-1.512-.622-2.415l.216.137s-.294-1.296-.637-1.669l.317.098s-.185-.831-.821-1.479l.636.216s-.608-1.128-.951-1.521c0 0 .47.039.598.157 0 0-.177-1.159-.739-1.767 0 0 .465.059.617.216 0 0-.375-1.006-1.125-1.969 0 0 .407.099.585.315 0 0-.352-1.083-.822-1.77 0 0 .474.19.601.406 0 0-.356-1.17-.749-1.798 0 0 .355.118.47.255 0 0-.521-1.237-.864-1.65 0 0 1.014-.558 3.29-.558 2.277 0 3.291.558 3.291.558C.521-1.237 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(32.862 193.343)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.114-.129.47-.24.47-.24-.394.591-.749 1.692-.749 1.692.127-.204.601-.382.601-.382-.47.647-.822 1.665-.822 1.665.178-.203.585-.296.585-.296-.75.906-1.125 1.853-1.125 1.853.152-.148.617-.204.617-.204-.562.572-.739 1.663-.739 1.663.127-.11.597-.147.597-.147-.343.369-.95 1.431-.95 1.431l.635-.203c-.635.609-.821 1.391-.821 1.391l.318-.092c-.343.351-.637 1.571-.637 1.571l.216-.13c-.407.85-.623 2.273-.623 2.273s-.216-1.423-.622-2.273l.216.13s-.294-1.22-.637-1.571l.317.092s-.186-.782-.821-1.391l.635.203s-.607-1.062-.95-1.431c0 0 .47.037.597.147 0 0-.176-1.091-.738-1.663 0 0 .465.056.617.204 0 0-.375-.947-1.125-1.853 0 0 .407.093.584.296 0 0-.351-1.018-.821-1.665 0 0 .474.178.601.382 0 0-.356-1.101-.75-1.692 0 0 .356.111.471.24 0 0-.521-1.164-.864-1.552 0 0 1.014-.526 3.29-.526 2.277 0 3.291.526 3.291.526C.521-1.164 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(73.452 203.424)">
              <path
                fill="#006942"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.095-.107.39-.199.39-.199-.327.49-.622 1.403-.622 1.403.106-.168.499-.316.499-.316-.39.536-.682 1.381-.682 1.381.148-.168.485-.245.485-.245-.622.751-.933 1.537-.933 1.537.126-.123.512-.169.512-.169-.466.475-.613 1.38-.613 1.38.105-.092.496-.123.496-.123-.285.307-.789 1.188-.789 1.188l.527-.169c-.527.506-.681 1.155-.681 1.155l.264-.077c-.285.291-.529 1.303-.529 1.303l.179-.107c-.337.705-.516 1.885-.516 1.885s-.179-1.18-.517-1.885l.179.107s-.244-1.012-.528-1.303l.263.077s-.154-.649-.681-1.155l.527.169s-.504-.881-.788-1.188c0 0 .39.031.495.123 0 0-.146-.905-.613-1.38 0 0 .386.046.512.169 0 0-.311-.786-.933-1.537 0 0 .338.077.485.245 0 0-.291-.845-.682-1.381 0 0 .394.148.499.316 0 0-.295-.913-.622-1.403 0 0 .295.092.39.199 0 0-.432-.966-.716-1.288 0 0 .841-.436 2.73-.436 1.888 0 2.73.436 2.73.436C.432-.966 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(499.84 179.501)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.079-.068.323-.126.323-.126-.271.31-.515.884-.515.884C-.105.652.221.559.221.559c-.323.338-.565.87-.565.87.122-.106.402-.154.402-.154-.516.473-.774.967-.774.967.105-.077.425-.106.425-.106-.387.299-.508.869-.508.869.087-.058.41-.077.41-.077-.236.193-.653.748-.653.748l.437-.106c-.437.318-.565.727-.565.727l.218-.049c-.236.184-.438.821-.438.821l.148-.067c-.279.444-.428 1.187-.428 1.187s-.148-.743-.428-1.187l.149.067s-.203-.637-.439-.821l.219.049s-.128-.409-.565-.727l.437.106s-.418-.555-.654-.748c0 0 .323.019.411.077 0 0-.122-.57-.508-.869 0 0 .319.029.424.106 0 0-.258-.494-.774-.967 0 0 .28.048.402.154 0 0-.241-.532-.565-.87 0 0 .326.093.414.199 0 0-.245-.574-.516-.884 0 0 .245.058.323.126 0 0-.358-.608-.594-.811 0 0 .698-.275 2.264-.275 1.566 0 2.264.275 2.264.275C.358-.608 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(502.027 180.687)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.079-.068.324-.126.324-.126-.271.31-.516.884-.516.884C-.105.652.221.559.221.559c-.323.338-.565.87-.565.87.123-.106.402-.154.402-.154-.516.473-.774.967-.774.967.105-.077.425-.106.425-.106-.387.299-.508.869-.508.869.087-.058.411-.077.411-.077-.236.193-.654.748-.654.748l.437-.106c-.437.318-.565.727-.565.727l.218-.049c-.236.184-.438.821-.438.821l.149-.067c-.28.444-.429 1.187-.429 1.187s-.148-.743-.428-1.187l.149.067s-.203-.637-.439-.821l.219.049s-.128-.409-.565-.727l.437.106s-.418-.555-.654-.748c0 0 .324.019.411.077 0 0-.121-.57-.508-.869 0 0 .319.029.424.106 0 0-.258-.494-.774-.967 0 0 .28.048.403.154 0 0-.242-.532-.566-.87 0 0 .326.093.414.199 0 0-.245-.574-.516-.884 0 0 .245.058.324.126 0 0-.359-.608-.595-.811 0 0 .698-.275 2.264-.275 1.567 0 2.265.275 2.265.275C.359-.608 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(507.36 180.214)">
              <path
                fill="#007149"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.059-.051.243-.094.243-.094C.039.138-.144.57-.144.57c.065-.08.31-.15.31-.15-.243.254-.424.653-.424.653C-.166.994.044.957.044.957a2.985 2.985 0 00-.582.727c.079-.058.319-.08.319-.08-.29.225-.381.653-.381.653.065-.043.308-.058.308-.058-.177.145-.491.562-.491.562l.329-.08c-.329.239-.425.546-.425.546l.164-.036c-.177.138-.329.616-.329.616l.112-.05c-.211.333-.322.892-.322.892s-.112-.559-.322-.892l.112.05s-.152-.478-.329-.616l.164.036s-.096-.307-.425-.546l.329.08s-.314-.417-.491-.562c0 0 .243.015.308.058 0 0-.091-.428-.382-.653 0 0 .241.022.319.08 0 0-.194-.371-.581-.727 0 0 .21.037.302.116 0 0-.182-.399-.425-.653 0 0 .245.07.311.15 0 0-.184-.432-.387-.664 0 0 .184.043.243.094 0 0-.269-.457-.447-.609 0 0 .524-.207 1.701-.207 1.176 0 1.701.207 1.701.207C.269-.457 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(-121.24 172.943)">
              <path
                fill="#00794f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h279.814s-11.704 16.266-19.151 16.266c-7.448 0-19.151-4.067-22.343-1.356-3.192 2.711-4.255 5.422-10.639 6.777-6.384 1.356-36.174 10.844-43.621 9.489-7.448-1.356-23.407-9.489-26.598-10.844-3.192-1.355-21.279-1.355-28.726 1.355-7.448 2.711-17.023 2.711-20.215 1.356-3.192-1.356-26.598-12.199-34.046-6.777-7.447 5.421-22.343 14.91-28.726 14.91-6.384 0-23.407-12.199-23.407-12.199S-5.32 8.133 0 0"
              ></path>
            </g>
            <g transform="translate(-121.255 172.943)">
              <path
                fill="#00744b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h273.892s-11.456 13.518-18.746 13.518c-7.29 0-18.745-3.38-21.869-1.127-3.125 2.253-4.166 4.506-10.414 5.632-6.249 1.127-35.409 9.012-42.698 7.886-7.29-1.127-22.912-7.886-26.036-9.012-3.124-1.126-20.828-1.126-28.118 1.126-7.29 2.253-16.663 2.253-19.787 1.127-3.124-1.127-26.035-10.138-33.325-5.632-7.29 4.505-21.87 12.391-28.118 12.391-6.249 0-22.911-10.138-22.911-10.138S-5.207 6.759 0 0"
              ></path>
            </g>
            <g transform="translate(201.068 172.943)">
              <path
                fill="#00794f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h123.008s-9.519 4.482-16.841 5.23c-7.321.747-7.975 7.17-27.744 7.917-19.769.747-30.099-3.435-36.688-4.182-6.59-.747-16.841 2.241-26.359.747C5.857 8.218 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(201.068 172.943)">
              <path
                fill="#00794f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h123.008s-9.519 4.482-16.841 5.23c-7.321.747-7.975 7.17-27.744 7.917-19.769.747-30.099-3.435-36.688-4.182-6.59-.747-16.841 2.241-26.359.747C5.857 8.218 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(209.753 172.943)">
              <path
                fill="#00744b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h95.138s-7.362 3.097-13.025 3.614c-5.663.516-6.168 4.954-21.458 5.47-15.29.517-23.279-2.373-28.376-2.889-5.097-.517-13.025 1.548-20.387.516C4.53 5.678 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(578.506 172.943)">
              <path
                fill="#00794f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h229.81s-9.612 19.643-15.729 19.643c-6.116 0-15.728-4.911-18.35-1.637-2.621 3.274-3.495 6.548-8.738 8.185-5.242 1.637-29.709 13.095-35.825 11.458-6.117-1.637-19.224-11.458-21.845-13.095-2.622-1.637-17.477-1.637-23.593 1.637-6.117 3.274-13.981 3.274-16.602 1.637-2.622-1.637-15.424-10.061-21.541-3.513-6.117 6.548-24.088 5.787-29.331 5.787-5.243 0-19.906-7.185-19.906-7.185S-4.369 9.822 0 0"
              ></path>
            </g>
            <g transform="translate(591.814 172.943)">
              <path
                fill="#00744b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h205.52s-8.596 16.665-14.066 16.665c-5.47 0-14.066-4.166-16.41-1.388-2.345 2.777-3.126 5.555-7.815 6.944-4.688 1.388-26.569 11.11-32.039 9.721-5.47-1.389-17.192-9.721-19.536-11.11-2.344-1.389-15.629-1.389-21.099 1.389-5.47 2.777-12.503 2.777-14.848 1.388-2.344-1.388-13.793-8.535-19.264-2.98-5.47 5.555-21.542 4.91-26.23 4.91-4.689 0-17.803-6.096-17.803-6.096S-3.907 8.333 0 0"
              ></path>
            </g>
            <g transform="translate(397.815 172.943)">
              <path
                fill="#00794f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h136.042s-8.65 7.485-15.727 8.109c-7.077.623-13.368-2.495-23.591 0s-29.096 6.237-49.542 5.613c-20.445-.623-27.523-6.861-32.241-6.861S0 0 0 0"
              ></path>
            </g>
            <g transform="translate(411.5 172.943)">
              <path
                fill="#00744b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h117.103s-7.446 6.294-13.538 6.818c-6.092.524-11.507-2.098-20.307 0-8.799 2.098-25.045 5.245-42.644 4.72-17.6-.524-23.692-5.769-27.753-5.769S0 0 0 0"
              ></path>
            </g>
            <g transform="translate(512.527 172.943)">
              <path
                fill="#008155"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h115.833s-8.963 8.178-15.858 9.54C93.08 10.904 84.807 20.444 66.19 21.807c-18.616 1.363-20.684-4.089-26.889-5.452-6.206-1.363-15.859 4.089-24.822 1.363C5.516 14.992 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(523.423 172.943)">
              <path
                fill="#007b51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h101.316s-7.84 6.696-13.871 7.811c-6.031 1.116-13.267 8.928-29.55 10.044-16.283 1.116-18.092-3.348-23.52-4.464-5.428-1.116-13.871 3.348-21.711 1.116C4.825 12.275 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(222.97 172.943)">
              <path
                fill="#008155"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-85.744s5.452 8.285 9.913 8.975c4.46.69 8.425-2.761 14.869 0 6.443 2.762 18.338 6.904 31.224 6.214 12.887-.691 17.347-7.595 20.321-7.595S0 0 0 0"
              ></path>
            </g>
            <g transform="translate(210.904 172.943)">
              <path
                fill="#007b51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-72.096s4.584 6.641 8.335 7.195c3.751.553 7.085-2.214 12.502 0 5.418 2.213 15.419 5.534 26.255 4.98 10.835-.553 14.586-6.087 17.086-6.087C-5.418 6.088 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(178.267 105.138)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.408-.385 1.676-.715 1.676-.715C.272 1.045-.996 4.32-.996 4.32c.453-.605 2.143-1.136 2.143-1.136C-.529 5.109-1.782 8.14-1.782 8.14c.634-.605 2.083-.88 2.083-.88-2.672 2.695-4.01 5.512-4.01 5.512.544-.44 2.2-.605 2.2-.605-2.004 1.703-2.633 4.95-2.633 4.95.453-.33 2.129-.44 2.129-.44-1.223 1.1-3.388 4.26-3.388 4.26l2.265-.605c-2.265 1.815-2.928 4.142-2.928 4.142l1.133-.275c-1.223 1.045-2.272 4.674-2.272 4.674l.77-.385c-1.449 2.53-2.219 6.765-2.219 6.765s-.769-4.235-2.219-6.765l.77.385s-1.049-3.629-2.272-4.674l1.133.275s-.663-2.327-2.928-4.142l2.265.605s-2.165-3.16-3.388-4.26c0 0 1.676.11 2.129.44 0 0-.629-3.247-2.633-4.95 0 0 1.656.165 2.2.605 0 0-1.338-2.817-4.01-5.512 0 0 1.449.275 2.083.88 0 0-1.253-3.031-2.929-4.956 0 0 1.69.531 2.143 1.136 0 0-1.268-3.275-2.672-5.035 0 0 1.268.33 1.676.715 0 0-1.857-3.465-3.08-4.62 0 0 3.616-1.565 11.732-1.565S3.081-4.62 3.081-4.62C1.857-3.465 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(169.393 104.285)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.172.398-.813.586-.813.586s.236.465-.26.834c-.497.368-1.225-.174-1.225-.174s.477 1.414.204 1.887c-.273.474-1.173.339-1.173.339s.323.806.019 1.005c-.303.198-.978.329-.978.329s.006.645-.204.9c-.211.256-1.053.349-1.053.349s.472.93-.91 1.685c-1.382.755-1.881-.128-1.881-.128-.24.142-1.088-.41-1.088-.41s.127.654-.02.853c-.146.199-.704.017-.704.017s.033.437-.17.569c-.202.132-.964-.078-.964-.078s-.023.531-.289.72c-.267.189-.828-.315-.828-.315s.215 1.157-1.438 1.617c-1.654.461-2.723-.803-2.723-.803s-.242.749-1.067.756c-.824.008-1.128-.723-1.128-.723s-.525 1.184-1.256 1.249c-.732.064-1.527-.744-1.527-.744s.042.475-.142.683c-.183.208-.806-.078-.806-.078s.434.778.001 1.09c-.432.312-.917-.049-.917-.049s-.288.881-1.353.869c-1.066-.013-1.458-1.246-1.458-1.246s-.003.607-.848.377c-.846-.229-1.022-1.235-1.022-1.235s-.192.332-.47.321c-.278-.01-.461-.731-.461-.731s-.349.331-.844-.068-.523-1.442-.523-1.442-.248.265-.602.112c-.353-.153-.451-.693-.451-.693s-.452.236-.805.083c-.354-.152-.437-1.101-.437-1.101s-.441.435-.695.056c-.291-.436-.292-1.461-.292-1.461l32.304-8.209C.368-1.888.317-.733 0 0"
              ></path>
            </g>
            <g transform="translate(55.004 123.136)">
              <path
                fill="#005c2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.7-.628 2.877-1.166 2.877-1.166-2.41 2.871-4.586 8.213-4.586 8.213.778-.987 3.678-1.853 3.678-1.853-2.877 3.14-5.028 8.085-5.028 8.085 1.088-.987 3.577-1.436 3.577-1.436-4.588 4.397-6.884 8.993-6.884 8.993.933-.718 3.777-.987 3.777-.987-3.44 2.778-4.52 8.075-4.52 8.075.777-.539 3.654-.718 3.654-.718-2.1 1.794-5.815 6.949-5.815 6.949l3.888-.987c-3.888 2.961-5.025 6.757-5.025 6.757l1.944-.449c-2.1 1.705-3.9 7.626-3.9 7.626l1.322-.628c-2.488 4.127-3.809 11.036-3.809 11.036s-1.32-6.909-3.808-11.036l1.321.628s-1.8-5.921-3.899-7.626l1.944.449s-1.137-3.796-5.025-6.757l3.888.987s-3.716-5.155-5.815-6.949c0 0 2.877.179 3.654.718 0 0-1.08-5.297-4.52-8.075 0 0 2.844.269 3.777.987 0 0-2.296-4.596-6.884-8.993 0 0 2.488.449 3.577 1.436 0 0-2.151-4.945-5.028-8.085 0 0 2.9.866 3.678 1.853 0 0-2.176-5.342-4.586-8.213 0 0 2.177.538 2.877 1.166 0 0-3.188-5.652-5.287-7.536 0 0 6.207-2.554 20.136-2.554 13.93 0 20.137 2.554 20.137 2.554C3.188-5.652 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(88.502 119.99)">
              <path
                fill="#005c2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.7-.747 2.877-1.387 2.877-1.387C.467 2.027-1.709 8.38-1.709 8.38c.778-1.173 3.678-2.204 3.678-2.204C-.908 9.91-3.059 15.79-3.059 15.79c1.088-1.173 3.577-1.707 3.577-1.707-4.588 5.228-6.884 10.694-6.884 10.694.933-.854 3.777-1.174 3.777-1.174-3.44 3.303-4.521 9.601-4.521 9.601.778-.64 3.655-.853 3.655-.853-2.099 2.134-5.815 8.264-5.815 8.264l3.888-1.174c-3.888 3.521-5.025 8.034-5.025 8.034l1.944-.533c-2.1 2.027-3.9 9.068-3.9 9.068l1.322-.747c-2.488 4.908-3.809 13.123-3.809 13.123s-1.32-8.215-3.808-13.123l1.321.747s-1.8-7.041-3.899-9.068l1.944.533s-1.137-4.513-5.025-8.034l3.888 1.174s-3.716-6.13-5.815-8.264c0 0 2.877.213 3.654.853 0 0-1.08-6.298-4.52-9.601 0 0 2.844.32 3.777 1.174 0 0-2.296-5.466-6.884-10.694 0 0 2.488.534 3.577 1.707 0 0-2.151-5.88-5.028-9.614 0 0 2.9 1.031 3.678 2.204 0 0-2.176-6.353-4.586-9.767 0 0 2.177.64 2.877 1.387 0 0-3.188-6.721-5.287-8.962 0 0 6.207-3.036 20.136-3.036 13.93 0 20.137 3.036 20.137 3.036C3.188-6.721 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(68.65 114.79)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.579-.57 2.38-1.059 2.38-1.059C.386 1.548-1.414 6.399-1.414 6.399c.643-.896 3.042-1.683 3.042-1.683-2.379 2.851-4.159 7.341-4.159 7.341.901-.896 2.959-1.303 2.959-1.303-3.795 3.992-5.694 8.165-5.694 8.165.772-.651 3.124-.896 3.124-.896-2.846 2.522-3.739 7.332-3.739 7.332.643-.489 3.023-.652 3.023-.652-1.737 1.629-4.81 6.31-4.81 6.31l3.216-.896c-3.216 2.689-4.157 6.135-4.157 6.135l1.608-.407c-1.737 1.548-3.226 6.924-3.226 6.924l1.093-.57c-2.058 3.747-3.15 10.02-3.15 10.02s-1.093-6.273-3.151-10.02l1.093.57s-1.489-5.376-3.225-6.924l1.608.407s-.941-3.446-4.157-6.135l3.216.896s-3.074-4.681-4.81-6.31c0 0 2.38.163 3.023.652 0 0-.894-4.81-3.74-7.332 0 0 2.353.245 3.125.896 0 0-1.9-4.173-5.695-8.165 0 0 2.059.407 2.959 1.303 0 0-1.779-4.49-4.159-7.341 0 0 2.399.787 3.042 1.683 0 0-1.799-4.851-3.793-7.458 0 0 1.801.489 2.379 1.059 0 0-2.637-5.132-4.373-6.843 0 0 5.134-2.319 16.658-2.319 11.523 0 16.658 2.319 16.658 2.319C2.637-5.132 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(98.268 118.885)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.445-.44 1.828-.818 1.828-.818C.296 1.195-1.086 4.94-1.086 4.94c.494-.691 2.337-1.299 2.337-1.299-1.828 2.202-3.194 5.668-3.194 5.668.691-.692 2.272-1.006 2.272-1.006-2.915 3.082-4.373 6.304-4.373 6.304.592-.503 2.399-.692 2.399-.692-2.185 1.947-2.872 5.66-2.872 5.66.494-.377 2.322-.503 2.322-.503-1.334 1.258-3.694 4.872-3.694 4.872l2.47-.692c-2.47 2.076-3.193 4.737-3.193 4.737l1.235-.315c-1.333 1.195-2.477 5.346-2.477 5.346l.84-.44c-1.581 2.893-2.42 7.736-2.42 7.736s-.839-4.843-2.419-7.736l.839.44s-1.143-4.151-2.477-5.346l1.235.315s-.723-2.661-3.192-4.737l2.469.692s-2.36-3.614-3.694-4.872c0 0 1.828.126 2.322.503 0 0-.686-3.713-2.872-5.66 0 0 1.807.189 2.4.692 0 0-1.459-3.222-4.373-6.304 0 0 1.58.314 2.272 1.006 0 0-1.367-3.466-3.194-5.668 0 0 1.842.608 2.336 1.299 0 0-1.382-3.745-2.913-5.758 0 0 1.383.378 1.827.818 0 0-2.025-3.962-3.359-5.283 0 0 3.944-1.79 12.793-1.79 8.85 0 12.793 1.79 12.793 1.79C2.025-3.962 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(203.514 94.433)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.389-.385 1.598-.715 1.598-.715C.259 1.045-.949 4.32-.949 4.32c.432-.605 2.043-1.136 2.043-1.136C-.505 5.109-1.699 8.14-1.699 8.14c.604-.605 1.987-.88 1.987-.88-2.549 2.695-3.824 5.512-3.824 5.512.518-.44 2.098-.605 2.098-.605-1.911 1.703-2.511 4.95-2.511 4.95.431-.33 2.03-.44 2.03-.44-1.167 1.1-3.23 4.26-3.23 4.26l2.159-.605c-2.159 1.815-2.791 4.142-2.791 4.142l1.08-.275c-1.167 1.045-2.167 4.674-2.167 4.674l.735-.385c-1.383 2.53-2.116 6.765-2.116 6.765s-.734-4.235-2.116-6.765l.734.385s-.999-3.629-2.166-4.674l1.08.275s-.632-2.327-2.791-4.142l2.159.605s-2.064-3.16-3.23-4.26c0 0 1.598.11 2.03.44 0 0-.6-3.247-2.511-4.95 0 0 1.58.165 2.098.605 0 0-1.275-2.817-3.824-5.512 0 0 1.382.275 1.987.88 0 0-1.195-3.031-2.793-4.956 0 0 1.611.531 2.043 1.136 0 0-1.208-3.275-2.547-5.035 0 0 1.209.33 1.598.715 0 0-1.771-3.465-2.937-4.62 0 0 3.448-1.565 11.186-1.565 7.738 0 11.186 1.565 11.186 1.565C1.771-3.465 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(194.054 94.69)">
              <path
                fill="#005c2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.562-.599 2.309-1.113 2.309-1.113-1.935 2.74-3.68 7.838-3.68 7.838.623-.941 2.951-1.768 2.951-1.768-2.309 2.997-4.035 7.716-4.035 7.716.874-.942 2.87-1.37 2.87-1.37-3.681 4.195-5.524 8.581-5.524 8.581.749-.685 3.031-.941 3.031-.941-2.761 2.65-3.628 7.705-3.628 7.705.624-.514 2.933-.685 2.933-.685-1.685 1.713-4.666 6.632-4.666 6.632l3.119-.941c-3.119 2.825-4.032 6.447-4.032 6.447l1.56-.428c-1.685 1.627-3.13 7.278-3.13 7.278l1.061-.599c-1.997 3.938-3.057 10.531-3.057 10.531s-1.059-6.593-3.056-10.531l1.061.599s-1.445-5.651-3.13-7.278l1.56.428s-.913-3.622-4.033-6.447l3.12.941s-2.981-4.919-4.666-6.632c0 0 2.309.171 2.933.685 0 0-.867-5.055-3.628-7.705 0 0 2.282.256 3.031.941 0 0-1.843-4.386-5.525-8.581 0 0 1.997.428 2.871 1.37 0 0-1.726-4.719-4.035-7.716 0 0 2.327.827 2.951 1.768 0 0-1.746-5.098-3.68-7.838 0 0 1.747.514 2.309 1.113 0 0-2.559-5.394-4.243-7.192 0 0 4.981-2.437 16.16-2.437 11.18 0 16.161 2.437 16.161 2.437C2.558-5.394 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(247.67 75.027)">
              <path
                fill="#005c2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.562-.599 2.309-1.113 2.309-1.113-1.935 2.74-3.68 7.838-3.68 7.838.624-.941 2.951-1.768 2.951-1.768-2.309 2.997-4.035 7.716-4.035 7.716.874-.942 2.87-1.37 2.87-1.37-3.681 4.195-5.524 8.581-5.524 8.581.749-.685 3.031-.941 3.031-.941-2.761 2.65-3.628 7.705-3.628 7.705.624-.514 2.933-.685 2.933-.685-1.685 1.713-4.666 6.632-4.666 6.632l3.12-.942c-3.12 2.826-4.033 6.448-4.033 6.448l1.56-.428c-1.685 1.627-3.13 7.278-3.13 7.278l1.061-.599c-1.997 3.938-3.056 10.531-3.056 10.531s-1.06-6.593-3.057-10.531l1.061.599s-1.445-5.651-3.13-7.278l1.56.428s-.913-3.622-4.033-6.448l3.12.942s-2.981-4.919-4.666-6.632c0 0 2.309.171 2.933.685 0 0-.867-5.055-3.628-7.705 0 0 2.282.256 3.031.941 0 0-1.843-4.386-5.524-8.581 0 0 1.996.428 2.87 1.37 0 0-1.726-4.719-4.035-7.716 0 0 2.327.827 2.951 1.768 0 0-1.745-5.098-3.68-7.838 0 0 1.747.514 2.309 1.113 0 0-2.558-5.394-4.243-7.192 0 0 4.981-2.437 16.161-2.437 11.179 0 16.16 2.437 16.16 2.437C2.559-5.394 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(217.136 93.766)">
              <path
                fill="#005c2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.469-.501 1.93-.93 1.93-.93C.313 1.36-1.146 5.622-1.146 5.622c.521-.787 2.467-1.478 2.467-1.478-1.93 2.505-3.373 6.45-3.373 6.45.73-.787 2.399-1.145 2.399-1.145-3.077 3.507-4.618 7.174-4.618 7.174.626-.573 2.534-.787 2.534-.787-2.308 2.215-3.033 6.441-3.033 6.441.522-.429 2.452-.572 2.452-.572-1.409 1.431-3.901 5.544-3.901 5.544l2.608-.787c-2.608 2.362-3.371 5.39-3.371 5.39l1.304-.358c-1.409 1.36-2.616 6.084-2.616 6.084l.886-.501c-1.669 3.293-2.555 8.804-2.555 8.804s-.886-5.511-2.555-8.804l.887.501s-1.208-4.724-2.616-6.084l1.304.358s-.763-3.028-3.372-5.39l2.609.787s-2.493-4.113-3.902-5.544c0 0 1.931.143 2.452.572 0 0-.724-4.226-3.033-6.441 0 0 1.908.214 2.534.787 0 0-1.54-3.667-4.618-7.174 0 0 1.669.358 2.4 1.145 0 0-1.443-3.945-3.373-6.45 0 0 1.945.691 2.467 1.478 0 0-1.46-4.262-3.077-6.552 0 0 1.461.429 1.93.93 0 0-2.138-4.509-3.547-6.012 0 0 4.164-2.038 13.51-2.038s13.51 2.038 13.51 2.038C2.139-4.509 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(645.36 138.407)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.777-.777 3.195-1.444 3.195-1.444C.518 2.11-1.898 8.724-1.898 8.724c.864-1.221 4.084-2.294 4.084-2.294-3.195 3.888-5.584 10.009-5.584 10.009 1.209-1.222 3.973-1.777 3.973-1.777C-4.52 20.104-7.07 25.794-7.07 25.794c1.036-.888 4.194-1.221 4.194-1.221-3.821 3.438-5.02 9.995-5.02 9.995.863-.666 4.059-.888 4.059-.888-2.332 2.221-6.459 8.603-6.459 8.603l4.318-1.222c-4.318 3.666-5.581 8.365-5.581 8.365l2.159-.556c-2.332 2.11-4.331 9.441-4.331 9.441l1.468-.777c-2.763 5.109-4.23 13.661-4.23 13.661s-1.467-8.552-4.23-13.661l1.468.777s-1.999-7.331-4.331-9.441l2.159.556s-1.263-4.699-5.581-8.365l4.318 1.222s-4.127-6.382-6.458-8.603c0 0 3.195.222 4.059.888 0 0-1.2-6.557-5.021-9.995 0 0 3.158.333 4.195 1.221 0 0-2.551-5.69-7.646-11.132 0 0 2.764.555 3.973 1.777 0 0-2.389-6.121-5.584-10.009 0 0 3.221 1.073 4.084 2.294 0 0-2.416-6.614-5.093-10.168 0 0 2.418.667 3.195 1.444 0 0-3.54-6.997-5.872-9.33 0 0 6.894-3.161 22.365-3.161 15.472 0 22.365 3.161 22.365 3.161C3.541-6.997 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(696.491 127.555)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.777-.778 3.195-1.444 3.195-1.444C.518 2.11-1.898 8.724-1.898 8.724c.864-1.221 4.084-2.294 4.084-2.294-3.195 3.887-5.584 10.009-5.584 10.009 1.209-1.222 3.973-1.777 3.973-1.777C-4.52 20.104-7.07 25.794-7.07 25.794c1.036-.888 4.194-1.222 4.194-1.222-3.821 3.439-5.02 9.996-5.02 9.996.863-.666 4.058-.888 4.058-.888-2.331 2.221-6.458 8.603-6.458 8.603l4.318-1.222c-4.318 3.666-5.581 8.364-5.581 8.364l2.159-.555c-2.332 2.11-4.331 9.441-4.331 9.441l1.468-.777c-2.763 5.109-4.23 13.661-4.23 13.661s-1.467-8.552-4.23-13.661l1.468.777s-1.999-7.331-4.331-9.441l2.159.555s-1.263-4.698-5.581-8.364l4.318 1.222s-4.127-6.382-6.458-8.603c0 0 3.195.222 4.058.888 0 0-1.199-6.557-5.02-9.996 0 0 3.158.334 4.195 1.222 0 0-2.551-5.69-7.646-11.132 0 0 2.764.555 3.973 1.777 0 0-2.389-6.122-5.584-10.009 0 0 3.221 1.073 4.084 2.294 0 0-2.416-6.614-5.093-10.168 0 0 2.418.666 3.195 1.444 0 0-3.54-6.997-5.872-9.33 0 0 6.894-3.161 22.365-3.161 15.472 0 22.365 3.161 22.365 3.161C3.541-6.997 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(602.623 134.734)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.641-.672 2.635-1.247 2.635-1.247-2.208 3.07-4.2 8.784-4.2 8.784.712-1.056 3.368-1.982 3.368-1.982-2.635 3.358-4.605 8.646-4.605 8.646.997-1.055 3.276-1.535 3.276-1.535-4.202 4.702-6.305 9.617-6.305 9.617.855-.767 3.459-1.055 3.459-1.055-3.151 2.97-4.14 8.635-4.14 8.635.712-.576 3.347-.768 3.347-.768-1.923 1.919-5.326 7.432-5.326 7.432l3.561-1.055c-3.561 3.166-4.603 7.226-4.603 7.226l1.781-.48c-1.923 1.823-3.572 8.156-3.572 8.156l1.211-.672c-2.279 4.414-3.489 11.802-3.489 11.802s-1.209-7.388-3.488-11.802l1.21.672s-1.648-6.333-3.571-8.156l1.78.48s-1.041-4.06-4.602-7.226l3.561 1.055s-3.404-5.513-5.326-7.432c0 0 2.635.192 3.347.768 0 0-.99-5.665-4.141-8.635 0 0 2.605.288 3.46 1.055 0 0-2.103-4.915-6.305-9.617 0 0 2.279.48 3.276 1.535 0 0-1.97-5.288-4.605-8.646 0 0 2.656.926 3.368 1.982 0 0-1.993-5.714-4.2-8.784 0 0 1.994.575 2.635 1.247 0 0-2.92-6.045-4.843-8.06 0 0 5.685-2.731 18.444-2.731 12.76 0 18.445 2.731 18.445 2.731C2.92-6.045 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(615.653 138.284)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.518-.542 2.128-1.007 2.128-1.007C.345 1.472-1.264 6.085-1.264 6.085c.575-.852 2.72-1.6 2.72-1.6-2.128 2.712-3.718 6.982-3.718 6.982.805-.853 2.645-1.24 2.645-1.24-3.393 3.796-5.091 7.765-5.091 7.765.69-.62 2.793-.852 2.793-.852-2.544 2.398-3.343 6.973-3.343 6.973.575-.465 2.703-.62 2.703-.62-1.553 1.549-4.301 6.001-4.301 6.001l2.875-.852c-2.875 2.556-3.716 5.834-3.716 5.834l1.438-.388c-1.553 1.472-2.884 6.586-2.884 6.586l.977-.543c-1.84 3.564-2.816 9.53-2.816 9.53s-.977-5.966-2.817-9.53l.977.543s-1.331-5.114-2.884-6.586l1.438.388s-.841-3.278-3.716-5.834l2.875.852s-2.748-4.452-4.3-6.001c0 0 2.127.155 2.702.62 0 0-.799-4.575-3.343-6.973 0 0 2.103.232 2.793.852 0 0-1.698-3.969-5.091-7.765 0 0 1.84.387 2.645 1.24 0 0-1.59-4.27-3.718-6.982 0 0 2.145.748 2.72 1.6 0 0-1.609-4.613-3.392-7.092 0 0 1.611.465 2.128 1.007 0 0-2.358-4.881-3.91-6.508 0 0 4.59-2.205 14.893-2.205C-.68-8.713 3.91-6.508 3.91-6.508 2.358-4.881 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(721.978 150.411)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.703-.604 2.89-1.122 2.89-1.122C.469 1.64-1.716 6.78-1.716 6.78c.78-.949 3.693-1.783 3.693-1.783-2.889 3.022-5.05 7.779-5.05 7.779C-1.979 11.827.52 11.395.52 11.395c-4.608 4.23-6.914 8.652-6.914 8.652.937-.69 3.793-.949 3.793-.949-3.455 2.672-4.54 7.768-4.54 7.768.781-.518 3.671-.69 3.671-.69-2.109 1.726-5.841 6.686-5.841 6.686l3.905-.949c-3.905 2.848-5.047 6.5-5.047 6.5l1.952-.431c-2.108 1.64-3.916 7.337-3.916 7.337l1.327-.604c-2.499 3.97-3.825 10.617-3.825 10.617s-1.327-6.647-3.826-10.617l1.328.604s-1.808-5.697-3.917-7.337l1.952.431s-1.142-3.652-5.047-6.5l3.905.949s-3.732-4.96-5.84-6.686c0 0 2.889.172 3.67.69 0 0-1.085-5.096-4.54-7.768 0 0 2.856.259 3.793.949 0 0-2.306-4.422-6.914-8.652 0 0 2.499.432 3.593 1.381 0 0-2.16-4.757-5.05-7.779 0 0 2.913.834 3.694 1.783 0 0-2.185-5.14-4.606-7.902 0 0 2.186.518 2.889 1.122 0 0-3.202-5.438-5.311-7.251 0 0 6.235-2.457 20.227-2.457 13.991 0 20.226 2.457 20.226 2.457C3.202-5.438 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(656.51 140.043)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.601-.727 2.471-1.35 2.471-1.35-2.07 3.322-3.939 9.504-3.939 9.504C-.8 7.012 1.691 6.01 1.691 6.01c-2.471 3.633-4.319 9.355-4.319 9.355.935-1.142 3.073-1.661 3.073-1.661-3.941 5.087-5.914 10.405-5.914 10.405.802-.83 3.245-1.142 3.245-1.142-2.956 3.214-3.883 9.343-3.883 9.343.668-.623 3.139-.831 3.139-.831-1.803 2.077-4.995 8.042-4.995 8.042l3.34-1.142c-3.34 3.425-4.317 7.817-4.317 7.817l1.67-.519c-1.804 1.973-3.35 8.824-3.35 8.824l1.136-.726c-2.138 4.775-3.272 12.768-3.272 12.768s-1.135-7.993-3.272-12.768l1.135.726s-1.546-6.851-3.349-8.824l1.669.519s-.977-4.392-4.316-7.817l3.339 1.142s-3.191-5.965-4.994-8.042c0 0 2.471.208 3.139.831 0 0-.928-6.129-3.883-9.343 0 0 2.442.312 3.244 1.142 0 0-1.972-5.318-5.913-10.405 0 0 2.137.519 3.072 1.661 0 0-1.847-5.722-4.319-9.355 0 0 2.492 1.002 3.159 2.144 0 0-1.868-6.182-3.939-9.504 0 0 1.87.623 2.471 1.35 0 0-2.738-6.54-4.542-8.72 0 0 5.333-2.955 17.299-2.955S4.542-8.72 4.542-8.72C2.739-6.54 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(487.364 93.859)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.071-.999 4.401-1.856 4.401-1.856C.714 2.713-2.614 11.215-2.614 11.215c1.189-1.571 5.626-2.949 5.626-2.949C-1.39 13.263-4.68 21.132-4.68 21.132c1.665-1.571 5.472-2.285 5.472-2.285-7.018 6.996-10.531 14.311-10.531 14.311 1.427-1.142 5.778-1.571 5.778-1.571-5.263 4.42-6.916 12.85-6.916 12.85 1.19-.857 5.591-1.143 5.591-1.143-3.212 2.856-8.896 11.06-8.896 11.06l5.948-1.571c-5.948 4.712-7.688 10.752-7.688 10.752l2.974-.714c-3.212 2.713-5.965 12.136-5.965 12.136l2.022-.999c-3.807 6.567-5.827 17.561-5.827 17.561s-2.02-10.994-5.827-17.561l2.023.999s-2.754-9.423-5.966-12.136l2.974.714s-1.74-6.04-7.688-10.752l5.948 1.571s-5.684-8.204-8.896-11.06c0 0 4.401.286 5.591 1.143 0 0-1.653-8.43-6.916-12.85 0 0 4.351.429 5.778 1.571 0 0-3.512-7.315-10.531-14.311 0 0 3.807.714 5.472 2.285 0 0-3.29-7.869-7.691-12.866 0 0 4.436 1.378 5.626 2.949 0 0-3.329-8.502-7.016-13.071 0 0 3.331.857 4.401 1.856 0 0-4.877-8.995-8.089-11.993 0 0 9.496-4.064 30.807-4.064s30.807 4.064 30.807 4.064C4.877-8.995 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(416.676 69.632)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.743-.769 3.055-1.427 3.055-1.427-2.56 3.513-4.87 10.052-4.87 10.052.826-1.208 3.905-2.268 3.905-2.268-3.055 3.843-5.338 9.894-5.338 9.894C-2.092 15.044.55 14.495.55 14.495-4.322 19.875-6.76 25.5-6.76 25.5c.991-.878 4.011-1.208 4.011-1.208-3.654 3.4-4.801 9.882-4.801 9.882.826-.658 3.881-.878 3.881-.878-2.229 2.196-6.175 8.505-6.175 8.505l4.129-1.208c-4.129 3.624-5.336 8.269-5.336 8.269l2.064-.549c-2.23 2.086-4.141 9.333-4.141 9.333l1.404-.768c-2.642 5.05-4.045 13.505-4.045 13.505s-1.402-8.455-4.044-13.505l1.403.768s-1.911-7.247-4.14-9.333l2.064.549s-1.208-4.645-5.336-8.269l4.128 1.208s-3.945-6.309-6.174-8.505c0 0 3.054.22 3.88.878 0 0-1.147-6.482-4.8-9.882 0 0 3.02.33 4.011 1.208 0 0-2.439-5.625-7.31-11.005 0 0 2.642.549 3.798 1.756 0 0-2.284-6.051-5.339-9.894 0 0 3.08 1.06 3.905 2.268 0 0-2.31-6.539-4.869-10.052 0 0 2.311.658 3.054 1.427 0 0-3.385-6.918-5.614-9.223 0 0 6.591-3.126 21.383-3.126 14.792 0 21.384 3.126 21.384 3.126C3.385-6.918 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(517.595 96.61)">
              <path
                fill="#005125"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.621-.643 2.555-1.194 2.555-1.194C.414 1.745-1.518 7.213-1.518 7.213c.691-1.01 3.266-1.897 3.266-1.897-2.555 3.214-4.465 8.276-4.465 8.276.967-1.011 3.177-1.47 3.177-1.47-4.074 4.5-6.114 9.204-6.114 9.204.829-.734 3.355-1.01 3.355-1.01-3.056 2.843-4.015 8.265-4.015 8.265.691-.551 3.245-.735 3.245-.735-1.864 1.837-5.163 7.113-5.163 7.113l3.452-1.01c-3.452 3.03-4.463 6.915-4.463 6.915l1.727-.459c-1.865 1.745-3.463 7.806-3.463 7.806l1.174-.643c-2.21 4.224-3.383 11.295-3.383 11.295s-1.173-7.071-3.382-11.295l1.174.643s-1.599-6.061-3.463-7.806l1.726.459s-1.01-3.885-4.463-6.915l3.453 1.01s-3.3-5.276-5.164-7.113c0 0 2.555.184 3.245.735 0 0-.959-5.422-4.014-8.265 0 0 2.525.276 3.354 1.01 0 0-2.039-4.704-6.113-9.204 0 0 2.209.459 3.176 1.47 0 0-1.91-5.062-4.465-8.276 0 0 2.576.887 3.266 1.897 0 0-1.932-5.468-4.072-8.407 0 0 1.933.551 2.554 1.194 0 0-2.831-5.785-4.695-7.714 0 0 5.512-2.613 17.883-2.613 12.371 0 17.883 2.613 17.883 2.613C2.831-5.785 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(500.982 104.584)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.746-.839 3.066-1.559 3.066-1.559C.497 2.279-1.821 9.42-1.821 9.42c.828-1.319 3.919-2.477 3.919-2.477C-.968 11.141-3.26 17.75-3.26 17.75-2.1 16.431.551 15.831.551 15.831c-4.888 5.877-7.335 12.021-7.335 12.021.994-.959 4.025-1.319 4.025-1.319-3.666 3.713-4.817 10.793-4.817 10.793.828-.719 3.894-.959 3.894-.959-2.237 2.398-6.196 9.289-6.196 9.289l4.142-1.319c-4.142 3.958-5.354 9.031-5.354 9.031l2.071-.599c-2.237 2.279-4.155 10.194-4.155 10.194l1.408-.84c-2.651 5.517-4.058 14.752-4.058 14.752s-1.408-9.235-4.059-14.752l1.408.84s-1.918-7.915-4.155-10.194l2.071.599s-1.212-5.073-5.354-9.031l4.142 1.319s-3.959-6.891-6.196-9.289c0 0 3.066.24 3.894.959 0 0-1.151-7.08-4.817-10.793 0 0 3.031.36 4.025 1.319 0 0-2.447-6.144-7.335-12.021 0 0 2.651.6 3.811 1.919 0 0-2.292-6.609-5.358-10.807 0 0 3.091 1.158 3.919 2.477 0 0-2.318-7.141-4.887-10.979 0 0 2.32.72 3.066 1.559 0 0-3.397-7.555-5.634-10.074 0 0 6.614-3.414 21.459-3.414 14.844 0 21.458 3.414 21.458 3.414C3.397-7.555 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(438.228 78.389)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.694-.745 2.853-1.383 2.853-1.383-2.39 3.404-4.548 9.738-4.548 9.738.771-1.17 3.647-2.197 3.647-2.197-2.853 3.723-4.986 9.586-4.986 9.586 1.08-1.171 3.547-1.702 3.547-1.702-4.549 5.212-6.826 10.661-6.826 10.661.925-.851 3.745-1.17 3.745-1.17-3.411 3.293-4.482 9.573-4.482 9.573.771-.638 3.624-.851 3.624-.851-2.082 2.128-5.766 8.239-5.766 8.239l3.855-1.17c-3.855 3.511-4.983 8.011-4.983 8.011l1.927-.532c-2.082 2.021-3.867 9.041-3.867 9.041l1.311-.744c-2.467 4.893-3.777 13.083-3.777 13.083s-1.309-8.19-3.777-13.083l1.311.744s-1.785-7.02-3.867-9.041l1.928.532s-1.128-4.5-4.983-8.011l3.855 1.17s-3.684-6.111-5.766-8.239c0 0 2.853.213 3.624.851 0 0-1.071-6.28-4.483-9.573 0 0 2.82.319 3.745 1.17 0 0-2.277-5.449-6.826-10.661 0 0 2.468.531 3.547 1.702 0 0-2.133-5.863-4.986-9.586 0 0 2.876 1.027 3.647 2.197 0 0-2.157-6.334-4.547-9.738 0 0 2.159.638 2.853 1.383 0 0-3.162-6.701-5.244-8.935 0 0 6.156-3.028 19.969-3.028 13.814 0 19.969 3.028 19.969 3.028C3.161-6.701 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(398.368 60.968)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.694-.661 2.853-1.228 2.853-1.228-2.39 3.023-4.548 8.65-4.548 8.65.771-1.04 3.647-1.952 3.647-1.952-2.853 3.307-4.986 8.514-4.986 8.514 1.08-1.039 3.547-1.511 3.547-1.511-4.549 4.629-6.826 9.47-6.826 9.47.925-.756 3.745-1.039 3.745-1.039-3.411 2.925-4.482 8.503-4.482 8.503.771-.567 3.624-.756 3.624-.756-2.082 1.89-5.766 7.319-5.766 7.319l3.855-1.039c-3.855 3.118-4.983 7.115-4.983 7.115l1.927-.472c-2.082 1.795-3.866 8.031-3.866 8.031l1.31-.662c-2.467 4.347-3.777 11.622-3.777 11.622s-1.309-7.275-3.777-11.622l1.311.662s-1.785-6.236-3.867-8.031l1.928.472s-1.128-3.997-4.983-7.115l3.855 1.039s-3.684-5.429-5.766-7.319c0 0 2.853.189 3.624.756 0 0-1.071-5.578-4.483-8.503 0 0 2.82.283 3.746 1.039 0 0-2.277-4.841-6.827-9.47 0 0 2.468.472 3.547 1.511 0 0-2.133-5.207-4.986-8.514 0 0 2.876.912 3.647 1.952 0 0-2.157-5.627-4.547-8.65 0 0 2.159.567 2.852 1.228 0 0-3.161-5.953-5.243-7.937 0 0 6.156-2.689 19.969-2.689 13.814 0 19.969 2.689 19.969 2.689C3.161-5.953 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(452.4 85.97)">
              <path
                fill="#005628"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.506-.482 2.079-.895 2.079-.895C.337 1.308-1.235 5.409-1.235 5.409c.562-.757 2.658-1.423 2.658-1.423-2.079 2.411-3.634 6.206-3.634 6.206C-1.424 9.434.374 9.09.374 9.09c-3.315 3.374-4.975 6.902-4.975 6.902.675-.551 2.73-.758 2.73-.758-2.487 2.132-3.267 6.198-3.267 6.198.562-.413 2.641-.551 2.641-.551-1.517 1.377-4.202 5.334-4.202 5.334l2.809-.758c-2.809 2.273-3.631 5.186-3.631 5.186l1.404-.344c-1.517 1.308-2.818 5.853-2.818 5.853l.956-.482c-1.799 3.167-2.753 8.469-2.753 8.469s-.954-5.302-2.753-8.469l.956.482s-1.301-4.545-2.819-5.853l1.405.344s-.822-2.913-3.631-5.186l2.809.758s-2.685-3.957-4.202-5.334c0 0 2.079.138 2.641.551 0 0-.781-4.066-3.267-6.198 0 0 2.055.207 2.73.758 0 0-1.66-3.528-4.975-6.902 0 0 1.798.344 2.585 1.102 0 0-1.555-3.795-3.634-6.206 0 0 2.096.666 2.658 1.423 0 0-1.572-4.101-3.314-6.304 0 0 1.573.413 2.079.895 0 0-2.304-4.338-3.821-5.784 0 0 4.486-1.96 14.553-1.96s14.553 1.96 14.553 1.96C2.304-4.338 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(509.23 109.194)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.732.455-2.019.043-2.019.043s-.122 1.022-1.367 1.066C-4.631 1.152-5.25-.545-5.25-.545s-.774 2.835-1.761 3.3c-.987.464-2.348-.763-2.348-.763s-.357 1.675-1.088 1.657c-.732-.017-2.012-.559-2.012-.559s-.708 1.056-1.346 1.236c-.639.18-2.157-.612-2.157-.612s-.244 2.044-3.407 1.725c-3.164-.319-3.019-2.316-3.019-2.316-.56-.037-1.37-1.886-1.37-1.886s-.517 1.207-.984 1.367c-.467.16-1.202-.76-1.202-.76s-.432.746-.92.734c-.487-.011-1.532-1.207-1.532-1.207s-.63.839-1.289.848c-.659.009-1.039-1.439-1.039-1.439s-.929 2.124-4.22 1.022C-38.236.7-38.622-2.554-38.622-2.554s-1.243.947-2.636.035c-1.393-.911-1.089-2.44-1.089-2.44s-2.202 1.338-3.503.624c-1.3-.713-1.736-2.919-1.736-2.919s-.458.818-.998.952-1.269-1.03-1.269-1.03-.139 1.753-1.213 1.776c-1.074.024-1.486-1.108-1.486-1.108s-1.465 1.112-3.242-.101c-1.776-1.213-1.06-3.66-1.06-3.66s-.682.984-1.846-.336c-1.164-1.321-.34-3.155-.34-3.155s-.691.325-1.147-.003c-.455-.328.041-1.707.041-1.707s-.955.149-1.341-1.056c-.387-1.204.728-2.934.728-2.934s-.711.154-1.135-.491c-.424-.644.014-1.634.014-1.634s-1.022-.121-1.446-.766c-.423-.644.493-2.281.493-2.281s-1.224.215-1.228-.688c-.003-1.034 1.138-2.705 1.138-2.705L.499-5.362C2.723-2.661 1.35-.838 0 0"
              ></path>
            </g>
            <g transform="translate(379.239 58.623)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.435.41-1.317.282-1.317.282s.02.73-.79.916c-.81.186-1.381-.925-1.381-.925s-.229 2.081-.829 2.529c-.6.448-1.611-.241-1.611-.241s-.069 1.217-.55 1.296c-.48.079-1.371-.142-1.371-.142s-.359.828-.759 1.034c-.4.206-1.471-.16-1.471-.16s.041 1.461-2.06 1.632c-2.101.171-2.202-1.244-2.202-1.244-.371.043-1.082-1.15-1.082-1.15s-.219.91-.509 1.08c-.29.17-.861-.383-.861-.383s-.21.576-.53.629c-.32.053-1.121-.654-1.121-.654s-.33.666-.76.754c-.43.089-.821-.878-.821-.878s-.399 1.603-2.661 1.242c-2.261-.361-2.833-2.591-2.833-2.591s-.72.818-1.721.354c-1.001-.465-.951-1.573-.951-1.573s-1.31 1.211-2.231.874c-.921-.338-1.422-1.827-1.422-1.827s-.22.63-.56.791c-.34.16-.931-.563-.931-.563s.081 1.244-.619 1.394c-.7.151-1.081-.59-1.081-.59s-.85.961-2.131.333c-1.281-.627-1.052-2.429-1.052-2.429s-.35.773-1.241-.006c-.891-.779-.532-2.166-.532-2.166s-.42.314-.75.141c-.33-.172-.141-1.199-.141-1.199s-.61.222-.981-.572c-.37-.795.189-2.145.189-2.145s-.45.196-.791-.202c-.34-.398-.15-1.146-.15-1.146s-.681.043-1.021-.355c-.341-.399.099-1.659.099-1.659s-.78.303-.871-.328c-.104-.724.479-2.035.479-2.035l43.73 8.067C1.52-2.202.801-.755 0 0"
              ></path>
            </g>
            <g transform="translate(615.81 137.093)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.224.277-.715.249-.715.249s.039.448-.401.609c-.44.161-.797-.491-.797-.491s-.047 1.295-.36 1.605c-.314.31-.898-.057-.898-.057s.008.754-.253.83c-.262.076-.762-.009-.762-.009s-.166.53-.379.68c-.213.149-.817-.015-.817-.015s.078.898-1.074 1.123c-1.152.225-1.261-.642-1.261-.642-.203.048-.64-.646-.64-.646s-.087.572-.24.694c-.153.121-.489-.187-.489-.187s-.094.367-.268.418c-.175.05-.643-.339-.643-.339s-.157.429-.391.507c-.233.079-.486-.494-.486-.494s-.159 1.01-1.419.917c-1.261-.094-1.661-1.435-1.661-1.435s-.366.544-.935.315c-.569-.228-.585-.914-.585-.914s-.676.82-1.196.665c-.52-.155-.853-1.045-.853-1.045s-.098.401-.279.519c-.181.119-.535-.293-.535-.293s.092.762-.288.894-.619-.302-.619-.302-.432.64-1.162.326c-.73-.313-.672-1.436-.672-1.436s-.164.496-.685.067c-.52-.429-.375-1.304-.375-1.304s-.22.217-.408.129c-.189-.087-.123-.731-.123-.731s-.328.172-.563-.296c-.235-.469.022-1.332.022-1.332s-.24.146-.443-.08c-.203-.226-.127-.697-.127-.697s-.373.065-.576-.161c-.203-.226-.009-1.027-.009-1.027s-.418.231-.492-.153c-.085-.44.186-1.281.186-1.281L-.255-2.339C.755-1.443.413-.511 0 0"
              ></path>
            </g>
            <g transform="translate(422.658 74.906)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.092.507.693.757.693.757s-.328.584.093 1.059c.422.476 1.256-.196 1.256-.196s-.759 1.78-.581 2.384c.177.604 1.102.45 1.102.45s-.484 1.014-.221 1.271c.263.257.91.436.91.436s-.135.815.023 1.142c.159.327.98.461.98.461s-.657 1.168.57 2.149c1.227.982 1.902-.126 1.902-.126.21.184 1.166-.498 1.166-.498s-.257.825-.151 1.08c.106.254.698.035.698.035s-.119.551.056.722c.176.171.977-.08.977-.08s-.083.672.145.916c.228.244.888-.383.888-.383s-.446 1.46 1.11 2.074c1.557.614 2.875-.964 2.875-.964s.092.951.913.976c.82.026 1.269-.893 1.269-.893s.287 1.508 1.003 1.603c.716.096 1.671-.911 1.671-.911s-.136.599.005.866c.141.267.819-.083.819-.083s-.588.976-.219 1.379c.368.403.924-.045.924-.045s.111 1.12 1.176 1.125c1.064.005 1.702-1.548 1.702-1.548s-.118.767.771.493c.888-.275 1.266-1.543 1.266-1.543s.124.423.403.415c.279-.007.606-.916.606-.916s.282.425.855-.071c.574-.495.811-1.814.811-1.814s.194.34.577.153c.383-.186.589-.868.589-.868s.403.307.786.121c.383-.187.656-1.385.656-1.385s.352.559.681.083c.378-.545.584-1.842.584-1.842L1.774-3.014C.011-2.395-.169-.933 0 0"
              ></path>
            </g>
            <g transform="translate(175.303 102.209)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.377.28 1.047.096 1.047.096s.058.575.703.644c.645.069.974-.857.974-.857s.387 1.611.897 1.906c.509.294 1.221-.343 1.221-.343s.176.948.555.965c.38.016 1.046-.241 1.046-.241s.362.615.692.738c.33.124 1.121-.264 1.121-.264s.116 1.15 1.757 1.084c1.642-.065 1.577-1.185 1.577-1.185.291-.001.72-1.005.72-1.005s.262.693.503.799c.241.106.627-.382.627-.382s.22.432.473.443c.253.011.801-.619.801-.619s.322.491.663.519c.342.029.546-.767.546-.767s.471 1.22 2.183.722c1.712-.498 1.928-2.301 1.928-2.301s.64.572 1.366.113c.727-.459.577-1.324.577-1.324s1.135.826 1.813.474c.678-.352.915-1.569.915-1.569s.233.474.512.568c.28.094.663-.53.663-.53s.063.984.62 1.035c.557.052.776-.566.776-.566s.754.673 1.681.059c.927-.614.568-2.006.568-2.006s.349.574.959-.121c.61-.696.192-1.75.192-1.75s.357.206.594.039c.238-.167-.012-.954-.012-.954s.494.116.701-.542c.206-.659-.363-1.665-.363-1.665s.368.111.591-.233c.223-.345.001-.914.001-.914s.53-.031.753-.376c.223-.344-.244-1.291-.244-1.291s.634.163.64-.34c.007-.578-.576-1.552-.576-1.552L-.232-3.012C-1.398-1.583-.696-.516 0 0"
              ></path>
            </g>
            <g transform="translate(73.818 124.261)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.342.323 1.028.219 1.028.219s-.01.578.622.722c.633.145 1.069-.736 1.069-.736s.194 1.646.665 1.999c.471.352 1.253-.196 1.253-.196s.063.962.438 1.023c.375.061 1.067-.115 1.067-.115s.286.653.6.815c.313.161 1.144-.131 1.144-.131s-.021 1.156 1.617 1.285 1.706-.991 1.706-.991c.288.033.833-.913.833-.913s.178.719.405.853c.228.133.668-.305.668-.305s.168.455.418.495c.249.041.868-.52.868-.52s.262.525.597.594c.336.069.633-.697.633-.697s.323 1.267 2.082.974c1.759-.292 2.187-2.057 2.187-2.057s.567.644 1.343.274.729-1.247.729-1.247 1.03.954 1.744.685C24.431 1.76 24.81.58 24.81.58s.176.498.442.624.721-.448.721-.448-.054.985.493 1.101c.547.117.837-.47.837-.47s.67.758 1.663.257c.993-.5.801-1.924.801-1.924s.278.61.966-.008c.688-.619.398-1.715.398-1.715s.329.247.585.109c.256-.137.101-.949.101-.949s.477.174.759-.456c.283-.63-.163-1.696-.163-1.696s.352.154.614-.162c.262-.315.109-.906.109-.906s.53.031.792-.285c.262-.316-.09-1.311-.09-1.311s.61.237.676-.262c.075-.573-.389-1.609-.389-1.609L.126-3.018C-1.201-1.737-.63-.595 0 0"
              ></path>
            </g>
            <g transform="translate(13.588 127.195)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.405.497 1.352.478 1.352.478s-.116.78.715 1.087c.83.307 1.576-.808 1.576-.808s-.027 2.261.547 2.822c.575.56 1.731-.044 1.731-.044s-.084 1.313.412 1.462c.496.149 1.463.031 1.463.031s.273.936.668 1.209c.395.274 1.572.025 1.572.025s-.232 1.56 1.962 2.024c2.193.464 2.482-1.04 2.482-1.04.385.096 1.289-1.088 1.289-1.088s.114 1.004.398 1.225c.284.221.957-.295.957-.295s.147.645.478.745c.33.099 1.266-.552 1.266-.552s.262.758.704.91c.442.152.979-.832.979-.832s.214 1.771 2.646 1.686c2.431-.086 3.322-2.399 3.322-2.399s.653.972 1.769.608c1.115-.364 1.206-1.558 1.206-1.558s1.225 1.473 2.239 1.234c1.015-.239 1.736-1.769 1.736-1.769s.15.705.488.922c.338.218 1.054-.479 1.054-.479s-.245 1.323.473 1.577c.72.255 1.217-.488 1.217-.488s.772 1.143 2.204.641c1.432-.502 1.423-2.463 1.423-2.463s.269.876 1.309.159c1.04-.716.84-2.25.84-2.25s.403.392.773.251c.371-.141.304-1.266.304-1.266s.614.32 1.108-.483c.494-.802.078-2.323.078-2.323s.449.27.86-.111c.41-.381.306-1.208.306-1.208s.712.136 1.123-.245c.41-.381.11-1.79.11-1.79s.783.428.96-.236c.203-.762-.242-2.245-.242-2.245L.702-4.062C-1.319-2.563-.747-.916 0 0"
              ></path>
            </g>
            <g transform="translate(40.294 120.546)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.579-.57 2.38-1.059 2.38-1.059C.386 1.548-1.414 6.399-1.414 6.399c.644-.896 3.043-1.683 3.043-1.683-2.38 2.851-4.16 7.341-4.16 7.341.901-.896 2.959-1.303 2.959-1.303-3.795 3.992-5.694 8.165-5.694 8.165.772-.651 3.124-.896 3.124-.896-2.846 2.522-3.739 7.332-3.739 7.332.643-.489 3.023-.652 3.023-.652-1.737 1.629-4.81 6.31-4.81 6.31l3.216-.896c-3.216 2.689-4.157 6.135-4.157 6.135l1.608-.407c-1.737 1.548-3.226 6.924-3.226 6.924l1.094-.57c-2.059 3.747-3.151 10.02-3.151 10.02s-1.093-6.273-3.151-10.02l1.094.57s-1.49-5.376-3.226-6.924l1.608.407s-.941-3.446-4.157-6.135l3.216.896s-3.074-4.681-4.81-6.31c0 0 2.38.163 3.023.652 0 0-.894-4.81-3.74-7.332 0 0 2.353.245 3.125.896 0 0-1.9-4.173-5.695-8.165 0 0 2.059.407 2.959 1.303 0 0-1.779-4.49-4.159-7.341 0 0 2.399.787 3.042 1.683 0 0-1.799-4.851-3.793-7.458 0 0 1.801.489 2.38 1.059 0 0-2.638-5.132-4.374-6.843 0 0 5.134-2.319 16.658-2.319 11.523 0 16.658 2.319 16.658 2.319C2.637-5.132 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(552.215 124.414)">
              <path
                fill="#007139"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.258.593 1.186.837 1.186.837s-.328.722.397 1.249c.724.528 1.76-.342 1.76-.342s-.653 2.177-.247 2.878c.406.701 1.699.439 1.699.439s-.445 1.245-.002 1.527c.442.281 1.418.437 1.418.437s.007.979.317 1.354c.31.374 1.525.461 1.525.461s-.657 1.442 1.353 2.5c2.011 1.058 2.709-.315 2.709-.315.348.2 1.557-.692 1.557-.692s-.166 1.001.049 1.294c.216.292 1.015-.019 1.015-.019s-.035.664.26.852c.295.187 1.387-.181 1.387-.181s.046.805.435 1.074c.389.27 1.185-.531 1.185-.531s-.281 1.771 2.113 2.364 3.902-1.394 3.902-1.394.369 1.121 1.557 1.079c1.188-.041 1.607-1.17 1.607-1.17s.787 1.763 1.843 1.815c1.055.051 2.181-1.227 2.181-1.227s-.049.723.221 1.027c.269.304 1.16-.17 1.16-.17s-.605 1.21.025 1.656c.631.445 1.321-.135 1.321-.135s.437 1.319 1.972 1.233c1.535-.087 2.069-1.985 2.069-1.985s.02.921 1.232.519c1.212-.403 1.441-1.941 1.441-1.941s.284.491.685.458c.4-.033.646-1.14.646-1.14s.511.48 1.214-.158.718-2.223.718-2.223.363.386.869.132.633-1.081.633-1.081.657.329 1.163.075c.505-.255.602-1.699.602-1.699s.645.632 1.001.039c.409-.68.385-2.236.385-2.236L1.808-3.729C-.577-2.842-.475-1.092 0 0"
              ></path>
            </g>
            <g transform="translate(257.17 66.382)">
              <path
                fill="#005327"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.389-.385 1.598-.715 1.598-.715C.259 1.045-.949 4.32-.949 4.32c.432-.605 2.043-1.136 2.043-1.136C-.505 5.109-1.699 8.14-1.699 8.14c.604-.605 1.986-.88 1.986-.88-2.548 2.695-3.823 5.512-3.823 5.512.518-.44 2.098-.605 2.098-.605-1.911 1.703-2.511 4.95-2.511 4.95.432-.33 2.03-.44 2.03-.44-1.167 1.1-3.23 4.26-3.23 4.26l2.159-.605c-2.159 1.815-2.791 4.142-2.791 4.142l1.08-.275c-1.167 1.045-2.167 4.674-2.167 4.674l.735-.385c-1.382 2.53-2.116 6.765-2.116 6.765s-.734-4.235-2.116-6.765l.734.385s-1-3.629-2.166-4.674l1.08.275s-.632-2.327-2.791-4.142l2.159.605s-2.064-3.16-3.23-4.26c0 0 1.598.11 2.03.44 0 0-.6-3.247-2.511-4.95 0 0 1.58.165 2.098.605 0 0-1.275-2.817-3.824-5.512 0 0 1.382.275 1.987.88 0 0-1.195-3.031-2.793-4.956 0 0 1.611.531 2.043 1.136 0 0-1.208-3.275-2.547-5.035 0 0 1.209.33 1.598.715 0 0-1.771-3.465-2.937-4.62 0 0 3.448-1.565 11.186-1.565 7.738 0 11.186 1.565 11.186 1.565C1.771-3.465 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(515.723 54.256)">
              <path
                fill="#006934"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-137.476-19.162-223.978 6.643C-310.48 32.447-393.05 86.105-552.461 67.059V-60.122H10.421z"
              ></path>
            </g>
            <g transform="translate(-23.68 114.458)">
              <path
                fill="#006632"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c27.387 8.314 90.473 6.358 115.415.489 24.941-5.869 19.562-16.138 12.226-20.051-7.336-3.912.978-14.671 21.029-9.292 20.051 5.38 36.189 11.737 48.415 8.803 12.226-2.934 25.431-12.715 19.562-20.051-5.868-7.335 6.358-15.649 28.365-8.313 22.007 7.335 43.525 3.912 52.328-3.913 8.802-7.825 43.036-17.606 51.838-16.627v-16.139H-14.671z"
              ></path>
            </g>
            <g transform="translate(255.576 50.348)">
              <path
                fill="#005e2e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c158.478-16.633 217.209 68.617 366.959 87.477 115.362 14.528 176.889-.708 176.889-.708l-7.761-140.593-840.433-3.878-19.119 62.728C-204.931 43.064-158.478 16.633 0 0"
              ></path>
            </g>
            <g transform="translate(781.36 103.804)">
              <path
                fill="#005629"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-36 13.87-90.061 35.967-131.928 31.979-42.027-4.003-73.643-9.819-83.515-36.277-3.247-8.701-17.35-24.416-51.457-17.829-29.852 5.764-43.832 7.826-67.239-7.357C-354.335-42.584-366-59.443-409-65.388c-43-5.944-120-7.925-164 3.963-44 11.889-99 9.907-105 2.972v-63.406H36z"
              ></path>
            </g>
            <g transform="translate(130.941 69.582)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.072-1.088 4.405-2.02 4.405-2.02C.714 2.952-2.617 12.205-2.617 12.205c1.191-1.709 5.631-3.21 5.631-3.21-4.405 5.439-7.698 14.002-7.698 14.002 1.666-1.709 5.476-2.486 5.476-2.486-7.024 7.613-10.54 15.574-10.54 15.574 1.428-1.243 5.783-1.71 5.783-1.71-5.268 4.811-6.922 13.984-6.922 13.984 1.191-.932 5.596-1.243 5.596-1.243-3.215 3.107-8.904 12.035-8.904 12.035l5.953-1.709c-5.953 5.128-7.695 11.701-7.695 11.701l2.977-.777c-3.215 2.952-5.971 13.207-5.971 13.207l2.024-1.087c-3.81 7.147-5.833 19.111-5.833 19.111s-2.022-11.964-5.832-19.111l2.024 1.087s-2.756-10.255-5.971-13.207l2.977.777s-1.742-6.573-7.695-11.701l5.953 1.709s-5.689-8.928-8.904-12.035c0 0 4.405.311 5.596 1.243 0 0-1.654-9.173-6.922-13.984 0 0 4.354.467 5.783 1.71 0 0-3.516-7.961-10.541-15.574 0 0 3.81.777 5.477 2.486 0 0-3.293-8.563-7.699-14.002 0 0 4.441 1.501 5.632 3.21 0 0-3.332-9.253-7.023-14.225 0 0 3.334.932 4.406 2.02 0 0-4.882-9.789-8.097-13.052 0 0 9.505-4.422 30.836-4.422 21.332 0 30.836 4.422 30.836 4.422C4.882-9.789 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(171.517 54.592)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.001-1.019 4.114-1.893 4.114-1.893-3.447 4.659-6.558 13.33-6.558 13.33 1.112-1.602 5.259-3.008 5.259-3.008-4.114 5.096-7.189 13.121-7.189 13.121C-2.818 19.949.74 19.221.74 19.221c-6.559 7.134-9.843 14.593-9.843 14.593 1.335-1.164 5.401-1.601 5.401-1.601-4.919 4.507-6.464 13.104-6.464 13.104 1.112-.874 5.226-1.165 5.226-1.165-3.002 2.912-8.315 11.278-8.315 11.278l5.559-1.601c-5.559 4.804-7.185 10.964-7.185 10.964l2.779-.728c-3.001 2.767-5.575 12.376-5.575 12.376l1.89-1.019c-3.558 6.698-5.446 17.909-5.446 17.909s-1.888-11.211-5.446-17.909l1.89 1.019s-2.574-9.609-5.576-12.376l2.78.728s-1.627-6.16-7.185-10.964l5.558 1.601s-5.312-8.366-8.314-11.278c0 0 4.114.291 5.226 1.165 0 0-1.545-8.597-6.464-13.104 0 0 4.066.437 5.4 1.601 0 0-3.283-7.459-9.842-14.593 0 0 3.557.728 5.114 2.329 0 0-3.075-8.025-7.189-13.121 0 0 4.147 1.406 5.258 3.008 0 0-3.11-8.671-6.557-13.33 0 0 3.113.874 4.114 1.893 0 0-4.558-9.173-7.56-12.231 0 0 8.875-4.144 28.793-4.144S7.56-12.231 7.56-12.231C4.558-9.173 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(39.871 96.994)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.643-1.621 6.753-3.01 6.753-3.01C1.095 4.4-4.012 18.19-4.012 18.19c1.826-2.547 8.633-4.783 8.633-4.783-6.753 8.105-11.802 20.868-11.802 20.868 2.555-2.547 8.396-3.705 8.396-3.705-10.768 11.347-16.158 23.211-16.158 23.211 2.19-1.852 8.865-2.547 8.865-2.547-8.075 7.169-10.611 20.841-10.611 20.841 1.826-1.389 8.579-1.852 8.579-1.852-4.928 4.631-13.649 17.937-13.649 17.937l9.125-2.547c-9.125 7.642-11.795 17.439-11.795 17.439l4.563-1.158c-4.928 4.4-9.153 19.685-9.153 19.685l3.102-1.621c-5.84 10.652-8.94 28.483-8.94 28.483s-3.1-17.831-8.94-28.483l3.102 1.621s-4.225-15.285-9.153-19.685l4.563 1.158s-2.67-9.797-11.795-17.439l9.125 2.547s-8.721-13.306-13.649-17.937c0 0 6.753.463 8.578 1.852 0 0-2.535-13.672-10.61-20.841 0 0 6.675.695 8.865 2.547 0 0-5.39-11.864-16.158-23.211 0 0 5.841 1.158 8.396 3.705 0 0-5.049-12.763-11.802-20.868 0 0 6.807 2.236 8.633 4.783 0 0-5.107-13.79-10.765-21.2 0 0 5.11 1.389 6.753 3.01 0 0-7.483-14.589-12.411-19.452 0 0 14.57-6.592 47.268-6.592s47.268 6.592 47.268 6.592C7.483-14.589 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(86.09 68.46)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.849-.774 3.491-1.438 3.491-1.438C.566 2.102-2.074 8.69-2.074 8.69c.944-1.217 4.463-2.285 4.463-2.285-3.491 3.872-6.101 9.97-6.101 9.97 1.321-1.217 4.34-1.77 4.34-1.77-5.567 5.421-8.353 11.089-8.353 11.089 1.132-.885 4.583-1.217 4.583-1.217-4.175 3.425-5.485 9.957-5.485 9.957.943-.664 4.434-.886 4.434-.886-2.547 2.213-7.056 8.57-7.056 8.57l4.718-1.217c-4.718 3.651-6.098 8.332-6.098 8.332l2.359-.554c-2.548 2.102-4.732 9.404-4.732 9.404l1.604-.774c-3.019 5.089-4.622 13.608-4.622 13.608s-1.602-8.519-4.621-13.608l1.604.774s-2.185-7.302-4.732-9.404l2.359.554s-1.38-4.681-6.098-8.332l4.718 1.217s-4.509-6.357-7.056-8.57c0 0 3.491.222 4.434.886 0 0-1.311-6.532-5.485-9.957 0 0 3.451.332 4.583 1.217 0 0-2.786-5.668-8.353-11.089 0 0 3.019.553 4.34 1.77 0 0-2.61-6.098-6.101-9.97 0 0 3.519 1.068 4.463 2.285 0 0-2.64-6.588-5.565-10.128 0 0 2.642.664 3.491 1.438 0 0-3.869-6.97-6.416-9.293 0 0 7.532-3.149 24.435-3.149 16.904 0 24.436 3.149 24.436 3.149C3.868-6.97 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(98.905 64.913)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.661-.689 2.716-1.279 2.716-1.279C.441 1.87-1.613 7.729-1.613 7.729c.734-1.082 3.472-2.033 3.472-2.033-2.716 3.444-4.747 8.867-4.747 8.867C-1.86 13.481.489 12.989.489 12.989c-4.331 4.821-6.499 9.862-6.499 9.862.881-.787 3.566-1.082 3.566-1.082-3.248 3.046-4.268 8.855-4.268 8.855.734-.59 3.45-.787 3.45-.787-1.982 1.968-5.489 7.622-5.489 7.622l3.67-1.083c-3.67 3.248-4.744 7.41-4.744 7.41l1.835-.492c-1.982 1.87-3.681 8.364-3.681 8.364l1.247-.689c-2.349 4.526-3.595 12.103-3.595 12.103s-1.247-7.577-3.596-12.103l1.248.689s-1.7-6.494-3.682-8.364l1.836.492s-1.074-4.162-4.744-7.41l3.67 1.083s-3.508-5.654-5.49-7.622c0 0 2.716.197 3.45.787 0 0-1.019-5.809-4.267-8.855 0 0 2.685.295 3.565 1.082 0 0-2.167-5.041-6.498-9.862 0 0 2.349.492 3.376 1.574 0 0-2.03-5.423-4.746-8.867 0 0 2.738.951 3.472 2.033 0 0-2.054-5.859-4.33-9.008 0 0 2.056.59 2.716 1.279 0 0-3.009-6.199-4.991-8.265 0 0 5.86-2.801 19.011-2.801S4.992-8.265 4.992-8.265C3.01-6.199 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(148.755 55.845)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.811-.799 3.336-1.485 3.336-1.485C.541 2.171-1.982 8.973-1.982 8.973c.902-1.256 4.265-2.36 4.265-2.36-3.336 3.999-5.83 10.295-5.83 10.295C-2.285 15.651.6 15.08.6 15.08c-5.319 5.597-7.982 11.45-7.982 11.45 1.082-.914 4.38-1.257 4.38-1.257-3.99 3.537-5.242 10.281-5.242 10.281.901-.686 4.237-.914 4.237-.914-2.434 2.285-6.742 8.849-6.742 8.849l4.508-1.257c-4.508 3.77-5.827 8.603-5.827 8.603l2.254-.572c-2.435 2.171-4.522 9.71-4.522 9.71l1.533-.799c-2.885 5.254-4.416 14.05-4.416 14.05s-1.532-8.796-4.417-14.05l1.533.799s-2.088-7.539-4.522-9.71l2.254.572s-1.319-4.833-5.827-8.603l4.508 1.257s-4.308-6.564-6.742-8.849c0 0 3.336.228 4.237.914 0 0-1.252-6.744-5.242-10.281 0 0 3.298.343 4.38 1.257 0 0-2.663-5.853-7.982-11.45 0 0 2.885.571 4.147 1.828 0 0-2.494-6.296-5.83-10.295 0 0 3.363 1.104 4.265 2.36 0 0-2.523-6.802-5.318-10.458 0 0 2.524.686 3.336 1.485 0 0-3.697-7.197-6.131-9.596 0 0 7.198-3.251 23.351-3.251s23.35 3.251 23.35 3.251C3.697-7.197 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(51.718 94.535)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.148-1.042 4.718-1.936 4.718-1.936C.765 2.83-2.803 11.698-2.803 11.698c1.275-1.638 6.032-3.076 6.032-3.076-4.719 5.212-8.246 13.42-8.246 13.42C-3.232 20.404.849 19.66.849 19.66c-7.524 7.297-11.29 14.927-11.29 14.927 1.53-1.192 6.195-1.638 6.195-1.638-5.643 4.61-7.414 13.403-7.414 13.403 1.275-.894 5.993-1.192 5.993-1.192-3.443 2.979-9.536 11.536-9.536 11.536l6.376-1.638c-6.376 4.915-8.242 11.215-8.242 11.215l3.188-.745c-3.443 2.83-6.395 12.659-6.395 12.659l2.168-1.042c-4.081 6.851-6.247 18.318-6.247 18.318s-2.166-11.467-6.246-18.318l2.168 1.042s-2.952-9.829-6.396-12.659l3.188.745s-1.865-6.3-8.241-11.215l6.376 1.638s-6.093-8.557-9.536-11.536c0 0 4.718.298 5.993 1.192 0 0-1.771-8.793-7.414-13.403 0 0 4.664.446 6.195 1.638 0 0-3.766-7.63-11.29-14.927 0 0 4.081.744 5.866 2.382 0 0-3.527-8.208-8.246-13.42 0 0 4.756 1.438 6.032 3.076 0 0-3.568-8.868-7.521-13.634 0 0 3.57.894 4.718 1.936 0 0-5.229-9.383-8.672-12.51 0 0 10.18-4.239 33.026-4.239 22.847 0 33.026 4.239 33.026 4.239C5.228-9.383 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(65.265 74.063)">
              <path
                fill="#004922"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.7-.689 2.876-1.28 2.876-1.28-2.41 3.151-4.584 9.015-4.584 9.015.777-1.083 3.676-2.034 3.676-2.034-2.876 3.446-5.026 8.874-5.026 8.874C-1.97 13.492.517 12.999.517 12.999c-4.585 4.825-6.88 9.87-6.88 9.87.932-.788 3.775-1.083 3.775-1.083-3.439 3.048-4.519 8.862-4.519 8.862.778-.591 3.653-.788 3.653-.788-2.098 1.97-5.812 7.628-5.812 7.628l3.886-1.083c-3.886 3.249-5.023 7.415-5.023 7.415l1.943-.492c-2.098 1.871-3.898 8.37-3.898 8.37l1.322-.689c-2.487 4.53-3.808 12.112-3.808 12.112s-1.32-7.582-3.807-12.112l1.322.689s-1.8-6.499-3.898-8.37l1.943.492s-1.137-4.166-5.023-7.415l3.886 1.083s-3.714-5.658-5.812-7.628c0 0 2.875.197 3.652.788 0 0-1.079-5.814-4.518-8.862 0 0 2.843.295 3.775 1.083 0 0-2.295-5.045-6.88-9.87 0 0 2.487.493 3.575 1.576 0 0-2.15-5.428-5.026-8.874 0 0 2.899.951 3.676 2.034 0 0-2.175-5.864-4.584-9.015 0 0 2.176.591 2.876 1.28 0 0-3.187-6.204-5.285-8.272 0 0 6.204-2.802 20.128-2.802 13.925 0 20.129 2.802 20.129 2.802C3.187-6.204 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(300.107 32.848)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.948-1.137 3.897-2.112 3.897-2.112C.632 3.087-2.315 12.762-2.315 12.762c1.053-1.787 4.982-3.356 4.982-3.356-3.897 5.687-6.811 14.642-6.811 14.642 1.475-1.787 4.845-2.6 4.845-2.6-6.214 7.962-9.324 16.286-9.324 16.286 1.264-1.3 5.116-1.788 5.116-1.788-4.66 5.03-6.123 14.623-6.123 14.623 1.053-.975 4.95-1.3 4.95-1.3-2.844 3.25-7.876 12.585-7.876 12.585l5.266-1.787c-5.266 5.362-6.807 12.236-6.807 12.236l2.633-.813c-2.844 3.087-5.282 13.811-5.282 13.811l1.79-1.137c-3.37 7.474-5.159 19.984-5.159 19.984s-1.789-12.51-5.159-19.984l1.791 1.137s-2.439-10.724-5.282-13.811l2.633.813s-1.541-6.874-6.807-12.236l5.266 1.787s-5.033-9.335-7.876-12.585c0 0 3.897.325 4.95 1.3 0 0-1.463-9.593-6.123-14.623 0 0 3.852.488 5.116 1.788 0 0-3.11-8.324-9.324-16.286 0 0 3.37.813 4.844 2.6 0 0-2.913-8.955-6.81-14.642 0 0 3.928 1.569 4.982 3.356 0 0-2.947-9.675-6.212-14.874 0 0 2.949.975 3.897 2.112 0 0-4.319-10.236-7.162-13.648 0 0 8.408-4.625 27.276-4.625 18.869 0 27.277 4.625 27.277 4.625C4.318-10.236 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(246.976 38.43)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.375-1.343 5.654-2.494 5.654-2.494-4.737 6.14-9.013 17.567-9.013 17.567 1.528-2.111 7.228-3.964 7.228-3.964-5.654 6.716-9.881 17.292-9.881 17.292 2.139-2.111 7.029-3.071 7.029-3.071-9.015 9.403-13.528 19.233-13.528 19.233 1.834-1.535 7.422-2.111 7.422-2.111-6.76 5.941-8.883 17.27-8.883 17.27 1.528-1.152 7.182-1.535 7.182-1.535-4.126 3.837-11.428 14.863-11.428 14.863l7.641-2.111c-7.641 6.332-9.876 14.45-9.876 14.45l3.82-.959c-4.125 3.646-7.663 16.31-7.663 16.31l2.598-1.343c-4.89 8.827-7.485 23.602-7.485 23.602s-2.596-14.775-7.485-23.602l2.597 1.343s-3.537-12.664-7.663-16.31l3.82.959s-2.235-8.118-9.875-14.45l7.64 2.111s-7.302-11.026-11.427-14.863c0 0 5.653.383 7.181 1.535 0 0-2.122-11.329-8.883-17.27 0 0 5.588.576 7.422 2.111 0 0-4.512-9.83-13.528-19.233 0 0 4.89.96 7.029 3.071 0 0-4.227-10.576-9.88-17.292 0 0 5.699 1.853 7.227 3.964 0 0-4.276-11.427-9.013-17.567 0 0 4.279 1.151 5.654 2.494 0 0-6.265-12.089-10.39-16.118 0 0 12.198-5.462 39.574-5.462 27.376 0 39.574 5.462 39.574 5.462C6.265-12.089 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(274.35 32.791)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.783-.816 3.22-1.516 3.22-1.516C.522 2.216-1.913 9.162-1.913 9.162c.87-1.283 4.116-2.409 4.116-2.409-3.22 4.082-5.627 10.511-5.627 10.511 1.219-1.283 4.003-1.866 4.003-1.866-5.134 5.716-7.704 11.691-7.704 11.691 1.044-.933 4.227-1.283 4.227-1.283-3.85 3.611-5.059 10.498-5.059 10.498.87-.7 4.09-.933 4.09-.933-2.349 2.333-6.508 9.035-6.508 9.035l4.351-1.283c-4.351 3.849-5.624 8.784-5.624 8.784l2.176-.583c-2.35 2.216-4.364 9.915-4.364 9.915l1.479-.817c-2.785 5.366-4.263 14.348-4.263 14.348s-1.478-8.982-4.262-14.348l1.479.817s-2.014-7.699-4.364-9.915l2.176.583s-1.273-4.935-5.624-8.784l4.351 1.283s-4.159-6.702-6.508-9.035c0 0 3.22.233 4.09.933 0 0-1.209-6.887-5.059-10.498 0 0 3.182.35 4.227 1.283 0 0-2.57-5.975-7.704-11.691 0 0 2.784.583 4.003 1.866 0 0-2.407-6.429-5.627-10.511 0 0 3.245 1.126 4.116 2.409 0 0-2.435-6.946-5.133-10.678 0 0 2.437.7 3.22 1.516 0 0-3.568-7.349-5.917-9.798 0 0 6.946-3.32 22.536-3.32 15.591 0 22.537 3.32 22.537 3.32C3.568-7.349 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(324.083 29.425)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.783-.988 3.22-1.834 3.22-1.834C.522 2.68-1.913 11.082-1.913 11.082c.871-1.552 4.116-2.915 4.116-2.915-3.22 4.938-5.627 12.714-5.627 12.714 1.219-1.552 4.003-2.258 4.003-2.258-5.134 6.913-7.704 14.141-7.704 14.141 1.044-1.129 4.227-1.552 4.227-1.552-3.85 4.367-5.059 12.696-5.059 12.696.87-.846 4.09-1.128 4.09-1.128-2.349 2.821-6.508 10.928-6.508 10.928l4.351-1.552c-4.351 4.655-5.624 10.624-5.624 10.624l2.176-.706c-2.35 2.681-4.364 11.992-4.364 11.992l1.479-.988c-2.784 6.49-4.263 17.353-4.263 17.353s-1.478-10.863-4.262-17.353l1.479.988s-2.014-9.311-4.364-11.992l2.176.706s-1.273-5.969-5.624-10.624l4.351 1.552s-4.158-8.107-6.508-10.928c0 0 3.22.282 4.09 1.128 0 0-1.209-8.329-5.059-12.696 0 0 3.183.423 4.227 1.552 0 0-2.57-7.228-7.704-14.141 0 0 2.784.706 4.003 2.258 0 0-2.407-7.776-5.627-12.714 0 0 3.245 1.363 4.116 2.915 0 0-2.435-8.402-5.133-12.916 0 0 2.437.846 3.22 1.834 0 0-3.568-8.888-5.917-11.851 0 0 6.946-4.015 22.536-4.015 15.591 0 22.537 4.015 22.537 4.015C3.568-8.888 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(777.789 89.564)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.238-1.94 9.202-3.603 9.202-3.603C1.492 5.266-5.466 21.771-5.466 21.771c2.487-3.049 11.762-5.726 11.762-5.726-9.201 9.701-16.081 24.976-16.081 24.976 3.482-3.048 11.44-4.434 11.44-4.434-14.673 13.581-22.017 27.78-22.017 27.78 2.984-2.218 12.08-3.049 12.08-3.049-11.003 8.58-14.458 24.943-14.458 24.943 2.487-1.663 11.688-2.217 11.688-2.217-6.714 5.543-18.598 21.468-18.598 21.468l12.435-3.048c-12.435 9.146-16.073 20.871-16.073 20.871l6.218-1.386c-6.715 5.267-12.473 23.559-12.473 23.559l4.228-1.94c-7.958 12.749-12.182 34.09-12.182 34.09s-4.224-21.341-12.183-34.09l4.228 1.94s-5.757-18.292-12.472-23.559l6.218 1.386s-3.638-11.725-16.073-20.871l12.435 3.048s-11.884-15.925-18.599-21.468c0 0 9.202.554 11.689 2.217 0 0-3.455-16.363-14.459-24.943 0 0 9.096.831 12.081 3.049 0 0-7.345-14.199-22.018-27.78 0 0 7.959 1.386 11.44 4.434 0 0-6.879-15.275-16.081-24.976 0 0 9.276 2.677 11.763 5.726 0 0-6.959-16.505-14.668-25.374 0 0 6.963 1.663 9.202 3.603 0 0-10.197-17.461-16.912-23.281 0 0 19.854-7.889 64.409-7.889 44.555 0 64.408 7.889 64.408 7.889C10.197-17.461 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(697.788 84.977)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.695-1.794 6.97-3.332 6.97-3.332C1.13 4.87-4.141 20.133-4.141 20.133c1.884-2.819 8.91-5.294 8.91-5.294-6.97 8.971-12.181 23.097-12.181 23.097 2.638-2.819 8.666-4.101 8.666-4.101-11.115 12.56-16.678 25.691-16.678 25.691 2.261-2.051 9.151-2.82 9.151-2.82-8.335 7.935-10.952 23.068-10.952 23.068 1.884-1.538 8.854-2.051 8.854-2.051-5.087 5.127-14.088 19.854-14.088 19.854l9.419-2.819c-9.419 8.458-12.175 19.302-12.175 19.302l4.71-1.282c-5.087 4.87-9.448 21.787-9.448 21.787l3.203-1.794c-6.028 11.79-9.228 31.526-9.228 31.526s-3.2-19.736-9.228-31.526l3.203 1.794s-4.362-16.917-9.448-21.787l4.71 1.282s-2.756-10.844-12.175-19.302l9.419 2.819s-9.002-14.727-14.088-19.854c0 0 6.97.513 8.854 2.051 0 0-2.617-15.133-10.952-23.068 0 0 6.89.769 9.151 2.82 0 0-5.563-13.131-16.678-25.691 0 0 6.028 1.282 8.666 4.101 0 0-5.211-14.126-12.181-23.097 0 0 7.026 2.475 8.91 5.294 0 0-5.271-15.263-11.111-23.465 0 0 5.275 1.538 6.97 3.332 0 0-7.724-16.148-12.81-21.53 0 0 15.038-7.296 48.788-7.296S12.81-21.53 12.81-21.53C7.724-16.148 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(719.075 88.245)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.33-1.279 5.467-2.376 5.467-2.376-4.58 5.849-8.715 16.732-8.715 16.732 1.478-2.01 6.989-3.775 6.989-3.775-5.467 6.397-9.555 16.47-9.555 16.47C-3.745 25.04.984 24.126.984 24.126c-8.719 8.956-13.082 18.319-13.082 18.319 1.773-1.462 7.177-2.01 7.177-2.01-6.538 5.658-8.59 16.448-8.59 16.448 1.477-1.097 6.945-1.462 6.945-1.462-3.99 3.655-11.051 14.157-11.051 14.157l7.389-2.011c-7.389 6.031-9.55 13.764-9.55 13.764l3.694-.914c-3.99 3.472-7.411 15.535-7.411 15.535l2.512-1.279c-4.728 8.407-7.238 22.48-7.238 22.48s-2.51-14.073-7.238-22.48l2.512 1.279s-3.421-12.063-7.411-15.535l3.695.914s-2.162-7.733-9.55-13.764l7.388 2.011s-7.061-10.502-11.05-14.157c0 0 5.467.365 6.945 1.462 0 0-2.053-10.79-8.591-16.448 0 0 5.404.548 7.177 2.01 0 0-4.363-9.363-13.081-18.319 0 0 4.728.914 6.797 2.925 0 0-4.088-10.073-9.555-16.47 0 0 5.511 1.765 6.989 3.775 0 0-4.134-10.883-8.715-16.732 0 0 4.137 1.097 5.467 2.376 0 0-6.058-11.514-10.048-15.352 0 0 11.796-5.202 38.269-5.202s38.269 5.202 38.269 5.202C6.058-11.514 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(740.25 86.852)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.744-.714 3.06-1.326 3.06-1.326C.496 1.938-1.818 8.011-1.818 8.011c.827-1.122 3.912-2.107 3.912-2.107-3.06 3.57-5.348 9.191-5.348 9.191 1.158-1.121 3.805-1.631 3.805-1.631-4.881 4.997-7.323 10.222-7.323 10.222.992-.816 4.018-1.122 4.018-1.122-3.66 3.158-4.809 9.179-4.809 9.179.827-.612 3.887-.816 3.887-.816-2.233 2.04-6.186 7.9-6.186 7.9l4.136-1.122c-4.136 3.366-5.346 7.681-5.346 7.681l2.068-.51c-2.233 1.938-4.148 8.669-4.148 8.669l1.406-.714c-2.647 4.692-4.052 12.545-4.052 12.545s-1.405-7.853-4.052-12.545l1.407.714s-1.915-6.731-4.149-8.669l2.068.51s-1.21-4.315-5.346-7.681l4.136 1.122s-3.952-5.86-6.186-7.9c0 0 3.061.204 3.888.816 0 0-1.149-6.021-4.809-9.179 0 0 3.026.306 4.018 1.122 0 0-2.443-5.225-7.323-10.222 0 0 2.647.51 3.805 1.631 0 0-2.288-5.621-5.348-9.191 0 0 3.085.985 3.912 2.107 0 0-2.315-6.073-4.879-9.337 0 0 2.316.612 3.061 1.326 0 0-3.392-6.425-5.625-8.567 0 0 6.603-2.903 21.422-2.903 14.82 0 21.423 2.903 21.423 2.903C3.391-6.425 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(644.863 75.24)">
              <path
                fill="#004521"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.434-1.147 5.894-2.131 5.894-2.131C.956 3.114-3.501 12.874-3.501 12.874c1.593-1.803 7.534-3.386 7.534-3.386-5.894 5.736-10.3 14.769-10.3 14.769 2.23-1.803 7.327-2.622 7.327-2.622-9.398 8.031-14.102 16.427-14.102 16.427 1.911-1.311 7.737-1.803 7.737-1.803-7.048 5.074-9.261 14.75-9.261 14.75 1.593-.983 7.487-1.311 7.487-1.311-4.301 3.278-11.912 12.695-11.912 12.695l7.964-1.803c-7.964 5.408-10.295 12.342-10.295 12.342l3.983-.82c-4.301 3.115-7.989 13.931-7.989 13.931l2.708-1.147c-5.097 7.539-7.803 20.159-7.803 20.159s-2.706-12.62-7.803-20.159l2.708 1.147s-3.688-10.816-7.989-13.931l3.983.82s-2.331-6.934-10.296-12.342l7.965 1.803s-7.611-9.417-11.912-12.695c0 0 5.894.328 7.486 1.311 0 0-2.212-9.676-9.261-14.75 0 0 5.827.492 7.738 1.803 0 0-4.704-8.396-14.102-16.427 0 0 5.097.819 7.327 2.622 0 0-4.406-9.033-10.3-14.769 0 0 5.941 1.583 7.534 3.386 0 0-4.457-9.76-9.395-15.005 0 0 4.46.984 5.894 2.131 0 0-6.531-10.325-10.832-13.767 0 0 12.716-4.665 41.255-4.665s41.255 4.665 41.255 4.665C6.531-10.325 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(365.694 22.556)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.51.695-1.858.793-1.858.793s.268.993-.871 1.498-2.346-.84-2.346-.84.338 2.92-.404 3.719c-.742.799-2.463.167-2.463.167s.293 1.687-.392 1.944c-.685.256-2.075.23-2.075.23s-.264 1.244-.789 1.649-2.229.236-2.229.236.535 1.987-2.519 2.871c-3.055.883-3.665-1.024-3.665-1.024-.533.174-1.974-1.24-1.974-1.24s-.029 1.313-.403 1.636c-.374.322-1.399-.258-1.399-.258s-.123.854-.58 1.025c-.457.171-1.872-.549-1.872-.549s-.272 1.013-.88 1.267-1.501-.949-1.501-.949-.069 2.318-3.534 2.522c-3.466.204-5.037-2.671-5.037-2.671s-.8 1.341-2.433 1.015c-1.632-.326-1.92-1.859-1.92-1.859s-1.545 2.063-3.017 1.886c-1.473-.178-2.7-2.063-2.7-2.063s-.12.931-.571 1.256c-.451.325-1.561-.483-1.561-.483s.524 1.679-.464 2.101c-.987.422-1.792-.475-1.792-.475s-.945 1.578-3.046 1.115c-2.101-.464-2.348-3.001-2.348-3.001s-.266 1.167-1.838.376c-1.572-.792-1.492-2.801-1.492-2.801s-.519.559-1.065.425c-.545-.135-.598-1.599-.598-1.599s-.831.493-1.638-.48c-.808-.974-.419-2.994-.419-2.994s-.602.407-1.235-.033c-.634-.439-.596-1.521-.596-1.521s-.994.268-1.627-.172c-.634-.44-.393-2.301-.393-2.301s-1.056.656-1.396-.18c-.389-.959.047-2.935.047-2.935l67.358-2.464C1.535-3.484.94-1.281 0 0"
              ></path>
            </g>
            <g transform="translate(139.143 54.623)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.261.549-1.18.793-1.18.793s.316.655-.405 1.154c-.721.499-1.731-.278-1.731-.278s.617 1.984.208 2.636c-.408.652-1.68.437-1.68.437s.424 1.134-.016 1.401c-.439.268-1.404.431-1.404.431s-.018.898-.328 1.248-1.51.454-1.51.454.631 1.311-1.363 2.322c-1.995 1.012-2.667-.233-2.667-.233-.346.19-1.527-.604-1.527-.604s.152.915-.064 1.188c-.216.273-1 .003-1 .003s.027.609-.267.788c-.293.178-1.365-.138-1.365-.138s-.055.739-.442.995c-.387.255-1.161-.464-1.161-.464s.256 1.62-2.112 2.213c-2.368.593-3.831-1.2-3.831-1.2s-.377 1.036-1.548 1.022c-1.17-.014-1.57-1.042-1.57-1.042s-.797 1.635-1.838 1.703c-1.041.069-2.136-1.081-2.136-1.081s.039.662-.23.947c-.269.285-1.142-.132-1.142-.132s.582 1.097-.045 1.519c-.627.422-1.301-.096-1.301-.096s-.446 1.219-1.958 1.171c-1.513-.048-2.016-1.779-2.016-1.779s-.031.846-1.221.501c-1.191-.346-1.398-1.752-1.398-1.752s-.286.456-.681.434c-.394-.023-.623-1.033-.623-1.033s-.509.451-1.195-.12-.682-2.026-.682-2.026-.363.362-.858.139c-.496-.223-.612-.98-.612-.98s-.651.316-1.146.093c-.496-.223-.574-1.547-.574-1.547s-.644.593-.988.056c-.394-.616-.352-2.045-.352-2.045L-1.738-3.386C.603-2.62.482-1.012 0 0"
              ></path>
            </g>
            <g transform="translate(164.947 50.85)">
              <path
                fill="#006130"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.173.495-.851.682-.851.682s.264.616-.255 1.046c-.519.43-1.308-.328-1.308-.328s.544 1.854.265 2.438c-.279.583-1.24.333-1.24.333s.365 1.062.046 1.29c-.318.228-1.033.339-1.033.339s.023.827-.194 1.136c-.218.31-1.111.356-1.111.356s.526 1.234-.925 2.084c-1.452.849-2.006-.326-2.006-.326-.251.161-1.168-.62-1.168-.62s.151.851.001 1.093c-.151.242-.749-.039-.749-.039s.045.563-.167.715c-.212.152-1.028-.183-1.028-.183s-.01.678-.289.898c-.279.219-.889-.475-.889-.475s.258 1.502-1.49 1.951c-1.748.448-2.917-1.264-2.917-1.264s-.239.939-1.116.878c-.877-.061-1.219-1.024-1.219-1.024s-.529 1.472-1.306 1.493c-.776.02-1.643-1.085-1.643-1.085s.056.612-.133.863c-.19.251-.861-.169-.861-.169s.482 1.036.03 1.398c-.452.363-.978-.142-.978-.142s-.284 1.105-1.418.998c-1.134-.107-1.583-1.722-1.583-1.722s.012.777-.893.41c-.905-.367-1.119-1.671-1.119-1.671s-.195.409-.491.372c-.296-.037-.51-.978-.51-.978s-.362.395-.899-.16c-.537-.554-.594-1.894-.594-1.894s-.257.318-.637.092-.498-.927-.498-.927-.475.263-.855.037-.493-1.449-.493-1.449-.457.52-.737.012c-.321-.584-.349-1.899-.349-1.899l34.169-7.75C.343-2.389.319-.913 0 0"
              ></path>
            </g>
            <g transform="translate(46.832 80.042)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.337 2.059-3.387 1.917-3.387 1.917s1.19 1.715-.117 2.403c-1.308.689-2.825-.625-2.825-.625s1.348 2.343.452 3.448c-.897 1.105-2.213-.045-2.213-.045s-1.296 3.446-3.992 3.175c-2.695-.27-3.304-4.346-3.304-4.346s-1.313 1.517-2.324 1.53c-1.01.014-1.626-1.486-1.626-1.486s-.555 4.381-2.73 4.7c-2.174.318-3.694-1.914-3.694-1.914s-.078 1.019-.978 1.205c-.901.186-2.815-.534-2.815-.534s.367.881-.84 1.651c-1.207.77-2.648.184-2.648.184s-.237 2.14-2.602 2.387c-2.366.247-3.915-2.259-3.915-2.259s-.935.741-2.055.582c-1.12-.159-1.866-2.013-1.866-2.013s-1.539 2-2.276 1.985c-.737-.015-2.163-1.338-2.163-1.338s-.199 2.504-3.139 2.535c-2.94.03-3.545-3.126-3.545-3.126-2.984.495-3.077-2.162-3.077-2.162s-1.163.305-1.804-.548.174-1.858.174-1.858c-3.869-.056-4.148-3.614-4.148-3.614l61.781-6.442S.464-2.833 0 0"
              ></path>
            </g>
            <g transform="translate(403.238 28.372)">
              <path
                fill="#006935"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.442 1.28-2.128.812-2.128.812s.454 1.248-.361 1.528c-.816.281-1.501-.75-1.501-.75s.464 1.671-.173 2.269c-.636.599-1.229-.302-1.229-.302s-1.149 2.052-2.621 1.545c-1.472-.507-1.31-3.199-1.31-3.199s-.92.812-1.487.695c-.565-.116-.725-1.155-.725-1.155s-.849 2.744-2.103 2.68c-1.254-.064-1.828-1.685-1.828-1.685s-.169.645-.694.653c-.526.008-1.507-.691-1.507-.691s.097.611-.672.956-1.502-.209-1.502-.209-.396 1.345-1.747 1.21c-1.352-.134-1.908-1.934-1.908-1.934s-.613.361-1.22.12c-.606-.241-.793-1.523-.793-1.523s-1.106 1.094-1.516.993c-.41-.101-1.044-1.126-1.044-1.126s-.419 1.583-2.065 1.239c-1.646-.344-1.595-2.445-1.595-2.445-1.727-.051-1.452-1.768-1.452-1.768s-.687.052-.94-.575c-.253-.627.326-1.171.326-1.171-2.154-.515-1.872-2.833-1.872-2.833L-.368-3.165S.608-1.762 0 0"
              ></path>
            </g>
            <g transform="translate(793.029 82.758)">
              <path
                fill="#006332"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.975 3.627-5.73 2.658-5.73 2.658s1.496 3.366-.705 4.299c-2.202.932-4.297-1.787-4.297-1.787s1.608 4.533-.039 6.312c-1.646 1.78-3.461-.599-3.461-.599s-2.781 5.9-6.952 4.782c-4.17-1.118-4.243-8.597-4.243-8.597s-2.389 2.423-3.978 2.21c-1.588-.212-2.23-3.055-2.23-3.055s-1.82 7.755-5.301 7.82c-3.48.065-5.382-4.31-5.382-4.31s-.343 1.818-1.796 1.941c-1.453.124-4.301-1.62-4.301-1.62s.386 1.672-1.675 2.775c-2.062 1.103-4.196-.288-4.196-.288s-.835 3.797-4.6 3.687c-3.766-.109-5.653-4.982-5.653-4.982s-1.627 1.115-3.35.567c-1.724-.549-2.491-4.06-2.491-4.06s-2.849 3.24-4.002 3.04c-1.154-.2-3.104-2.915-3.104-2.915s-.855 4.461-5.475 3.828c-4.62-.633-4.885-6.455-4.885-6.455-4.789.192-4.359-4.613-4.359-4.613s-1.892.277-2.713-1.408c-.821-1.685.676-3.303.676-3.303-6.059-1.007-5.725-7.477-5.725-7.477l98.336 2.863S1.342-4.991 0 0"
              ></path>
            </g>
            <g transform="translate(662.848 75.663)">
              <path
                fill="#004c24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.221-.942 5.018-1.749 5.018-1.749C.814 2.556-2.981 10.566-2.981 10.566c1.356-1.479 6.415-2.778 6.415-2.778-5.019 4.708-8.77 12.122-8.77 12.122 1.899-1.48 6.239-2.152 6.239-2.152-8.002 6.591-12.008 13.483-12.008 13.483 1.628-1.076 6.589-1.48 6.589-1.48-6.002 4.165-7.886 12.107-7.886 12.107 1.356-.807 6.375-1.076 6.375-1.076-3.662 2.69-10.143 10.42-10.143 10.42l6.781-1.48c-6.781 4.439-8.765 10.13-8.765 10.13l3.391-.672c-3.662 2.556-6.802 11.434-6.802 11.434l2.305-.942c-4.34 6.188-6.644 16.547-6.644 16.547s-2.303-10.359-6.643-16.547l2.305.942s-3.14-8.878-6.802-11.434l3.391.672s-1.984-5.691-8.766-10.13l6.782 1.48s-6.481-7.73-10.143-10.42c0 0 5.019.269 6.375 1.076 0 0-1.884-7.942-7.886-12.107 0 0 4.961.404 6.589 1.48 0 0-4.006-6.892-12.008-13.483 0 0 4.34.672 6.239 2.152 0 0-3.751-7.414-8.77-12.122 0 0 5.059 1.299 6.415 2.778 0 0-3.795-8.01-7.999-12.315 0 0 3.797.807 5.018 1.749 0 0-5.561-8.475-9.223-11.3 0 0 10.827-3.829 35.126-3.829 24.3 0 35.127 3.829 35.127 3.829C5.561-8.475 0 0 0 0"
              ></path>
            </g>
            <g transform="translate(639.844 77.463)">
              <path
                fill="#006b36"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.811.736-2.488.503-2.488.503s.063 1.314-1.468 1.646C-5.486 2.481-6.606.48-6.606.48s-.365 3.744-1.488 4.549c-1.123.804-3.063-.439-3.063-.439s-.091 2.189-.999 2.33c-.908.14-2.604-.259-2.604-.259s-.655 1.489-1.407 1.858c-.752.368-2.794-.292-2.794-.292s.126 2.628-3.853 2.93c-3.978.301-4.217-2.246-4.217-2.246-.7.077-2.088-2.072-2.088-2.072s-.386 1.636-.931 1.941c-.544.305-1.645-.691-1.645-.691s-.378 1.036-.984 1.13c-.605.094-2.147-1.18-2.147-1.18s-.603 1.197-1.416 1.354c-.813.158-1.586-1.582-1.586-1.582s-.704 2.883-5.005 2.226c-4.3-.657-5.458-4.67-5.458-4.67s-1.338 1.468-3.251.63c-1.913-.838-1.856-2.833-1.856-2.833S-55.842 5.34-57.6 4.73c-1.757-.61-2.756-3.292-2.756-3.292s-.396 1.133-1.036 1.421c-.639.289-1.784-1.015-1.784-1.015s.195 2.239-1.128 2.507c-1.323.268-2.07-1.066-2.07-1.066s-1.579 1.726-4.03.593c-2.45-1.133-2.075-4.374-2.075-4.374s-.638 1.391-2.353-.014c-1.715-1.405-1.08-3.899-1.08-3.899s-.786.563-1.418.252c-.632-.312-.306-2.159-.306-2.159s-1.15.399-1.88-1.033c-.729-1.431.288-3.858.288-3.858s-.848.352-1.506-.366c-.659-.717-.324-2.062-.324-2.062s-1.289.074-1.948-.643c-.658-.718.133-2.984.133-2.984s-1.469.543-1.661-.593c-.221-1.303.841-3.661.841-3.661L-.503-6.865C2.811-3.958 1.494-1.356 0 0"
              ></path>
            </g>
            <g transform="translate(568.18 59.13)">
              <path
                fill="#006332"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.047 2.138-3.888.958-3.888.958s.522 2.276-.961 2.589c-1.483.313-2.456-1.633-2.456-1.633s.45 3.015-.791 3.922c-1.24.907-2.081-.793-2.081-.793s-2.446 3.333-4.906 2.131c-2.459-1.202-1.596-5.864-1.596-5.864s-1.781 1.217-2.743.892C-20.385 1.877-20.439.03-20.439.03s-2.074 4.604-4.248 4.222C-26.86 3.87-27.512.917-27.512.917s-.434 1.089-1.353.99c-.919-.1-2.48-1.531-2.48-1.531s.038 1.088-1.379 1.523c-1.416.436-2.575-.688-2.575-.688s-.981 2.261-3.31 1.735c-2.33-.525-2.912-3.786-2.912-3.786s-1.148.496-2.154-.055c-1.005-.55-1.057-2.828-1.057-2.828s-2.165 1.67-2.859 1.405c-.693-.264-1.577-2.19-1.577-2.19s-1.074 2.672-3.871 1.717c-2.798-.955-2.256-4.61-2.256-4.61-3.003-.462-2.152-3.399-2.152-3.399s-1.211-.058-1.517-1.206c-.306-1.148.822-1.973.822-1.973-3.647-1.362-2.654-5.347-2.654-5.347L.04-5.603S1.441-2.943 0 0"
              ></path>
            </g>
            <g transform="translate(796.36 72.833)">
              <path
                fill="#005328"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0s-95.598 16.514-203.346-9.058C-312.332-34.924-461.94-67.021-571.842-43.154c-53.317 11.579-168.598 64.648-282.299 52.01v-90.415l847.962 3.944z"
              ></path>
            </g>
            <g transform="translate(706.36 37.148)">
              <path
                fill="#004e24"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c6-3.117 12-7.792-25-10.908C-62-14.025-83 0-104 3.117c-21 3.116-50-4.675-78-9.35s-36-15.583-192-17.141C-530-24.933-517.106-9.267-538-1.558c-14.32 5.283-18.258 12.761-49 3.229-38.309-11.879-59-11.342-71.897-2.384C-663.701 2.624-669 21.621-695 30.971c-26 9.35-37-6.817-37-6.817l-19-76.357H76v66.228C-14 33.504-6 3.117 0 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
