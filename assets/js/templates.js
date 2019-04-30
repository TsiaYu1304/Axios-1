let x =0;
export const newsTemplate = news => `
<div class=" item item--${x++,x%6}"  style="background-image:url(${news.urlToImage});" >
      </div>
`;
