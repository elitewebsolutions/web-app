import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

function ProjectCard({ item, urlTitle }) {
  return (
    <>
      <div className="ourProjectCard">
        <div className="ourProjectCardInner">
          <Link
            to={`/our-works/${urlTitle}`}
            state={{ id: item.sys.id, titlePage: urlTitle }}
          >
            <div className="ourProjectImage">
              <img src={item.fields.featureImage.fields.file.url} alt="" />
            </div>
            <div className="ourProjectSubtitle">
              {documentToReactComponents(item.fields.summary)}
            </div>
          </Link>
          <div className="ourWorkTags">
            {item.fields &&
              item.fields.tagSlug.map((tag, index) => {
                const { slug, title } = tag ? tag.fields : "";

                return (
                  <Button buttonSize="btn--medium" key={index}>
                    <Link
                      to={`/${slug}`}
                      state={{ item: item.fields }}
                      key={index}
                    >
                      {title}
                    </Link>
                  </Button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
