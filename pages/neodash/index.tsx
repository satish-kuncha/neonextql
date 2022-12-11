import type { NextPage } from 'next'
// localhost:3000
const dash: NextPage = () => {
  return (
    <>
      <div>Dashboard from Local Neodash</div>
      <iframe src="https://cloned-neo-dash.vercel.app/?page=1$neodash_dataobject_dataobjectname=Customer" width="100%" height="900" allowFullScreen frameBorder="0"></iframe>
    
    </>
  )
}

export default dash
