import * as React from "react";
import styled from "styled-components";
import { Icon } from "@strapi/design-system/Icon";
import { Flex } from "@strapi/design-system/Flex";

const IconBox = styled(Flex)`
  background-color: #f0f0ff; /* primary100 */
  border: 1px solid #d9d8ff; /* primary200 */
  svg > rect {
    fill: #eafbe7; /* success100 */
    stroke: #c6f0c2; /* success200 */
  }
  svg > g > path {
    fill: #328048; /* success600 */
  }
  `;

const SvgIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 32 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
    <defs />
    <rect
      width="31"
      height="23"
      x="0.5"
      y="0.5"
      fill="#F6F6F9"
      stroke="#DCDCE4"
      rx="2.5" />
    <g
      transform="matrix(0.49446493,0,0,0.49446493,10.706027,6.4206637)">
      <path
        fill="#32324d"
        d="m 11.453333,27.571999 -0.05867,-0.0093 a 0.06,0.06 0 0 0 0.05733,0.0093 z m 12.992,-20.4453326 a 0.39333332,0.39333332 0 0 0 -0.762667,-0.044 0.39466666,0.39466666 0 0 1 -0.373333,0.2746666 h -1.104 a 0.39199999,0.39199999 0 0 1 -0.204,-0.056 l -1.598667,-0.96 a 0.39066666,0.39066666 0 0 0 -0.202667,-0.056 H 17.642666 A 0.39199999,0.39199999 0 0 0 17.425333,6.352 L 14.270666,8.4546664 A 0.39333332,0.39333332 0 0 0 14.096,8.785333 v 2.981333 a 0.39333332,0.39333332 0 0 0 0.208,0.348 l 4.134666,2.208 a 0.39733332,0.39733332 0 0 1 0.209333,0.342667 l 0.01867,1.677333 a 0.39466666,0.39466666 0 0 0 0.204,0.34 l 1.661333,0.92 a 0.39599999,0.39599999 0 0 1 0.202667,0.344 v 3.472 a 0.39599999,0.39599999 0 0 0 0.453333,0.389333 0.39466666,0.39466666 0 0 0 0.202667,-0.09333 c 0.669333,-0.590667 1.630667,-1.453333 1.758667,-1.649333 a 14.914666,14.914666 0 0 0 1.566666,-3.22 C 25.621333,14.224 24.905333,9.5106663 24.445333,7.1266664 Z M 12.838666,15.342666 8.457333,12.057333 A 0.28533333,0.28533333 0 0 0 8.285333,12 H 6.2066664 A 0.27066666,0.27066666 0 0 1 6.0159997,11.92 L 5.0359998,10.941333 a 0.28799999,0.28799999 0 0 0 -0.2026667,-0.084 H 1.0333332 a 0.26933333,0.26933333 0 0 1 -0.26399999,-0.324 0.27066666,0.27066666 0 0 1 0.0733333,-0.138667 L 1.4439999,9.7946663 a 0.26933333,0.26933333 0 0 1 0.192,-0.08 H 3.9466665 A 0.57066665,0.57066665 0 0 0 4.4973331,9.297333 l 0.492,-1.7493333 a 0.28533333,0.28533333 0 0 1 0.1426667,-0.176 l 1.9613333,-1.012 a 0.27066666,0.27066666 0 0 0 0.1466666,-0.24 V 5.2266664 c 0,-0.056 0.017333,-0.1093333 0.049333,-0.1546666 l 1.042667,-1.5013333 a 0.26666666,0.26666666 0 0 1 0.1266667,-0.098667 l 1.4599999,-0.548 A 0.27066666,0.27066666 0 0 0 10.093333,2.6706665 V 1.8559999 a 0.27066666,0.27066666 0 0 0 -0.12,-0.2266667 L 8.5106664,0.65733322 a 0.27333333,0.27333333 0 0 0 -0.2746667,-0.016 L 6.2453331,1.6373332 A 0.26933333,0.26933333 0 0 1 5.9599998,1.6079999 L 5.0146664,0.86133321 a 0.27199999,0.27199999 0 0 1 0.008,-0.42799999 L 5.7893331,-0.1320001 a 0.26933333,0.26933333 0 0 0 -0.00667,-0.43999999 L 4.5879998,-1.4053334 a 0.27066666,0.27066666 0 0 0 -0.2853333,-0.016 c -0.432,0.236 -1.7,0.93599998 -2.1506667,1.25199997 A 14.962666,14.962666 0 0 0 -2.716,5.5439998 c -0.1306667,0.2693333 -0.2906667,0.5426666 -0.3066667,0.8373333 -0.016,0.2946666 -0.2466667,0.9533333 -0.344,1.2199999 a 0.26933333,0.26933333 0 0 0 0.017333,0.2213334 L -0.80000008,12.508 a 0.26666666,0.26666666 0 0 0 0.0986667,0.102666 L 1.9813332,14.22 a 0.26799999,0.26799999 0 0 1 0.1293333,0.194666 l 0.5373333,3.896 a 0.27333333,0.27333333 0 0 0 0.1146667,0.186667 l 2.0933333,1.438666 a 0.28533333,0.28533333 0 0 1 0.1173333,0.177334 l 1.1093333,5.270666 a 0.25733333,0.25733333 0 0 0 0.036,0.088 c 0.104,0.168 0.52,0.785334 1.0213333,0.877334 -0.046667,0.01333 -0.088,0.04133 -0.1346666,0.05467 0.12,0.02133 0.24,0.04933 0.3573333,0.084 0.1426666,0.03733 0.2853333,0.07067 0.428,0.101334 0.224,0.044 0.2453333,0.08 0.3533333,-0.12 0.1426667,-0.266667 0.3066667,-0.357334 0.428,-0.389334 a 0.27599999,0.27599999 0 0 0 0.2066666,-0.208 l 0.72,-3.333333 A 0.28666666,0.28666666 0 0 1 9.6119997,22.365337 L 12.826666,20.08667 a 0.28533333,0.28533333 0 0 0 0.12,-0.233333 V 15.57067 a 0.28666666,0.28666666 0 0 0 -0.109333,-0.229333 z"
      />
      <path
        fill="#32324d"
        d="m 11.094666,-2.8573334 c 0,0 -0.26,0.014667 -0.313333,0.016 a 14.817333,14.817333 0 0 0 -5.2426666,1.1266667 c 0.1733334,0.12 -0.1253333,0.2306666 -0.1253333,0.2306666 l 0.4666667,0.91200001 H 8.381333 l 1.713333,0.85733332 1.5,-0.85733332 z m 6.588,5.1479999 1.150667,-1 a 0.28533333,0.28533333 0 0 0 -0.06667,-0.47599995 l -1.344,-0.62266665 A 0.28533333,0.28533333 0 0 0 17.043999,0.32666656 L 16.490666,1.4853332 a 0.28533333,0.28533333 0 0 0 0.106667,0.3653333 l 0.746666,0.4666667 a 0.28533333,0.28533333 0 0 0 0.338667,-0.026667 z m 5.386667,1.472 -0.416,-0.644 a 0.44933332,0.44933332 0 0 1 -0.01867,-0.030667 C 22.559993,2.9346662 21.939996,1.6813329 21.42133,1.1946662 c -0.389334,-0.36799995 -0.5,-0.26133329 -0.530667,-0.18 a 0.26933333,0.26933333 0 0 1 -0.08533,0.1133334 l -2.06,1.6666666 a 0.28533333,0.28533333 0 0 1 -0.18,0.062667 h -1.066667 a 0.28533333,0.28533333 0 0 0 -0.201333,0.082667 l -0.857334,0.8573333 a 0.28666666,0.28666666 0 0 0 0,0.4053334 l 0.857334,0.8559999 a 0.28533333,0.28533333 0 0 0 0.202666,0.084 h 5.369334 a 0.28666666,0.28666666 0 0 0 0.285333,-0.2973333 l -0.04,-0.94 a 0.28533333,0.28533333 0 0 0 -0.04533,-0.1426666 z"

      />
      <path
        fill="#32324d"
        d="M 10.666666,-1.1426667 A 13.142666,13.142666 0 1 1 1.3733332,2.7066665 13.054666,13.054666 0 0 1 10.666666,-1.1426667 Z m 0,-2.8573333 c -8.8359995,0 -15.9999993,7.1639998 -15.9999993,16 0,8.835999 7.1639998,15.999999 15.9999993,15.999999 8.836,0 16,-7.164 16,-15.999999 0,-8.8360002 -7.164,-16 -16,-16 z"
      />
    </g>
  </svg>
);

const InternationalizedFieldsIcon = () => (
  <IconBox justifyContent="center" alignItems="center" width={7} height={6} hasRadius aria-hidden>
    <Icon as={SvgIcon} />
  </IconBox>
)

export default InternationalizedFieldsIcon;