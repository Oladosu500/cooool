
type LayoutProp = {
    children: any,
    className: string
   }
   const Layout = (props: LayoutProp) => {
     return (
       <div className={`w-full h-full inline-block z-0 bg-gradient-to-r from-blue-50 to-white p-32 ${props.className}`}>
         {props.children}
       </div>
     )
   }
   
   export default Layout;
   