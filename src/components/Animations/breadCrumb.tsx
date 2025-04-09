import { TFunction } from "i18next";
import Link from "next/link";
import React from "react";
const BreadCrumb: React.FC<{
  className?: string;
   name:string,
   name2?:string,
   title:string,
   links?: Array<{ title: string; url: string }>,
   description?:string
}> = ({ className,name,title,description,name2,links}) => {


  return (
    <div className="pq-breadcrumb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <div className="pq-breadcrumb-title">
                <h1 id="breadcrumb-title">{name}</h1>
              </div>
              <div className="pq-breadcrumb-container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" id="breadcrumb-home">
                      <i className="fas fa-home me-2"></i>Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" id="breadcrumb-current">
                    {name}
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BreadCrumbComponent = React.memo(BreadCrumb);
