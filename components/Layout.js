export default function Layout({ what }) {
    return (
        <div className="layout"> 
            This is the {what} page 

    <style jsx>{
        `
        .layout {
            font-size: 25px; 
            width: 100%; 
            text-align: center; 
            justify-content: center; 
        }
        `
    }</style>
        </div>
    )

}