import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./serviceFeature.css";
// import { useSelector } from "react-redux";

function ServiceDetailFeature(props) {
  // const [data, setData] = useState([]);
  // const pageData = useSelector((state) => {
  //   return state.serviceDetail.serviceDetail;
  // });

  // const getPageData = async () => {
  //   const d = await pageData;
  //   setData(d);
  // };

  // useEffect(() => {
  //   getPageData();
  //   // eslint-disable-next-line
  // }, []);

  // const { brandCard, title } = data;

  return (
    <>
      <section className="sFeatureContainer">
        <div className="wrapper">
          <div className="sFeatuteTitle">
            <h3>{props.title} </h3>
          </div>

          <div className="sFeatureWrapper">
            {props.data &&
              props.data.map((item, index) => {
                return (
                  <div className="sFeatureCard" key={index}>
                    <div className="sFeatureImage">
                      <img src={item.fields.image.fields.file.url} alt="icon" />
                    </div>
                    <div className="sFeatureTitleSummary">
                      {documentToReactComponents(item.fields.content)}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailFeature;
