import React, { Component } from "react";
import {DepthOfFieldSnowfall} from 'react-snowflakes';
import {Snowfall, Snowflake} from 'react-snowflakes';

export default class Snow extends Component{
    render(){
        return(
            <div style={{position:'fixed',color:this.props.color, zIndex:'0'}}>
<DepthOfFieldSnowfall count={50}  
                      style={{
                        // Position must be relative or absolute,
                        // because snowflakes are positioned absolutely.
                        position: 'relative',
                        width: '100vw',
                        height: '400vh',
                     
                      }}>
                      <Snowfall count={50}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh'
          }}
          snowflakeFactory={index => {
            const size = index / 50; // 50 is the number of snowflakes.
            const w = 5 + 10 * size + 'px';
            return (
              <Snowflake speed={.05 + size * 2}
                         xSpeedPrc={.3 * size}
                         ySpeedPrc={.1 * size}
                         style={{
                           width: w,
                           height: w,
                           borderRadius: '50%',
                           backgroundColor: 'red',
                           opacity: .2 + .8 * size,
                           filter: `blur(${Math.round(Math.max(size - .5, 0) * 15)}px)`
                         }}/>
            )
          }}/>
          </DepthOfFieldSnowfall>
            </div>

        )
    }
}