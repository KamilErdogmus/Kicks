import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShoe } from "../../Utils";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { shoes } from "../../types";
import { EasySkeleton, EasyZoomOnMove } from "easy-magnify";
import Head from "./Head";
import Color from "./Color";
import Size from "./Sİze";
import Buttons from "./Buttons";
import Slider from "../../components/Slider";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<shoes>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });

  return (
    <div className=" max-w-[1320px] mx-auto mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
              <div className="lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
                {data.picture.map((url, i) => (
                  <div key={i}>
                    <EasyZoomOnMove
                      loadingIndicator={
                        <EasySkeleton height={510} width={429} />
                      }
                      mainImage={{
                        src: url,
                        alt: "My Product",
                      }}
                      zoomImage={{
                        src: url,
                        alt: "My Product",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                <Head data={data} />
                <Color data={data.color} />
                <Size data={data.size} />

                <div>
                  <div className="flex gap-2 justify-between mb-2">
                    <Buttons text="ADD TO CART" flex={7.83} />
                    <Buttons src={"/heart.png"} flex={1} />
                  </div>
                  <Buttons text="BUY IT NOW" bg flex={1} />
                </div>

                <div>
                  <h2 className="uppercase text-[16px] font-semibold mb-2">
                    About the product
                  </h2>
                  <p
                    className="font-open text-[16px] font-normal"
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  />
                </div>
              </div>
            </section>
            <Slider />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
