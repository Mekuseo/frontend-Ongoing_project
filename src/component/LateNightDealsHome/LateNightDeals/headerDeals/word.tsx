// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


const Word = ({ value, hidden = false }) => {
    const getStyle = ()=> {
        return {
          visibility:  hidden ? 'hidden' : 'visible'
        }
      }
      return (
        <div className='digital'>
          {/* <p>{value}</p> */}
          <p style={getStyle() as React.CSSProperties}>{value}</p>
        </div>
    );
};

export default Word;