import type { NextPage } from 'next'
// localhost:3000
const re: NextPage = () => {
  return (
    <>
      <div>Dashboard from Local Neodash</div>
      <iframe src="http://localhost:3005?page=1$neodash_dataobject_dataobjectname=Customer" width="100%" height="900" allowfullscreen frameborder="0"></iframe>
    
    </>
  )
}

export default re
