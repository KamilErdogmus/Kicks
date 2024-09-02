import { calculatedValue } from "./Calculate";

function formatParams(params: {
  [key: string]: string;
}): string {
  const queryParams: string[] = [];

  Object.keys(params).forEach((key) => {
    const values = params[key].split(",");

    if (key === "price") {
      //? `price` parametresi sayıya dönüştürülüyor
      const price = parseFloat(values[0]);
      //* `calculatedValue` fonksiyonunu discount parametresi ile çağırıyoruz
      queryParams.push(`${key}_lte=${calculatedValue(price)}`);
    } else {
      //! Diğer parametreler için "_like" formatı kullanılıyor
      values.forEach((value) => {
        if (key === "gender") {
          queryParams.push(`${key}=${value}`);
        } else {
          queryParams.push(`${key}_like=${value}`);
        }
      });
    }
  });

  return "?" + queryParams.join("&");
}

export default formatParams;
