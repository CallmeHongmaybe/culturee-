import '../styles/index.css'; 

function MyApp({ Component, pageProps }) {
    return (
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    )
  }
  
export default MyApp