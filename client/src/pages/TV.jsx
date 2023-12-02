import React from "react";
import Content from "../components/Content";
import tv from "../components/tvDummy";
import { useNavigate } from "react-router-dom";

const TV = () => {
   const navigate = useNavigate();

    return (
      <div className="TV">
        <div className="app-container">
        {
          tv.results.map((item)=> {
            return ( 
              <div onClick={() => 
                navigate(`/tv/${item.name}`,
                 {state: item.poster_path})
                }>
                <Content 
                  poster_path={item.poster_path}
                  title={item.name}
                  vote_average={item.vote_average}
                />
              </div>
            )
          })
        }
      </div>
      </div>
    )
}

export default TV;