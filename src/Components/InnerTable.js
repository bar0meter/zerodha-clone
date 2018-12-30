import React, { Fragment } from 'react';

const InnerTable = props => {
  return (
    <Fragment>
      <div className="innerTable">
        <div className="grid-inner" style={{ color: 'blue' }}>
          <div className="heading leftAlign">BID</div>
          <div className="heading">ORDERS</div>
          <div className="heading rightAlign">QTY</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign" style={{ fontWeight: 'bold' }}>
            Total
          </div>
          <div />
          <div className="rightAlign" style={{ fontWeight: 'bold' }}>
            0
          </div>
        </div>
        <div />
        <div className="grid-inner" style={{ color: 'red' }}>
          <div className="heading leftAlign">BID</div>
          <div className="heading">ORDERS</div>
          <div className="heading rightAlign">QTY</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign">0</div>
          <div>0</div>
          <div className="rightAlign">0</div>
          <div className="leftAlign" style={{ fontWeight: 'bold' }}>
            Total
          </div>
          <div />
          <div className="rightAlign" style={{ fontWeight: 'bold' }}>
            0
          </div>
        </div>
        <div className="grid-inner">
          <div className="leftAlign heading">Open</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">Low</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">Volume</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">LTQ</div>
          <div />
          <div className="rightAlign">663.5</div>
        </div>
        <div />
        <div className="grid-inner">
          <div className="leftAlign heading">Open</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">Low</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">Volume</div>
          <div />
          <div className="rightAlign">663.5</div>
          <div className="leftAlign heading">LTQ</div>
          <div />
          <div className="rightAlign">663.5</div>
        </div>
      </div>
    </Fragment>
  );
};

export default InnerTable;
