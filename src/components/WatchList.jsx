export default function WatchList() {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
        <div className='bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'>Action</div>
        <div className='bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'>Action</div>
        <div className='bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'>Action</div>
        <div className='bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'>Action</div>
        <div className='bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'>Action</div>
    </div>

      <div className='flex justify-center my-4'>
        <input
          className='bg-yellow-300/90 h-[3rem] w-[18rem] border border-gray-950 text-gray-900 rounded-lg pl-3'
          type='text'
          placeholder='Search for movies...'
        />
      </div>

      <div className='overflow-hidden rounded-lg border ml-20 mr-20 mt-10'>
        <table className='w-full text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='flex items-center px-6 py-6'>
                <img
                  className='w-24 bg-cover rounded-md'
                  src={`https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080`}
                  alt=''
                />
                <div className='px-8'>Alien</div>
              </td>

              <td>8.5</td>
              <td>90%</td>
              <td>Action</td>

              <td>
                <button className='bg-red-600 text-white w-16 px-2 py-2 rounded-md'>
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td colSpan='5' className='px-0 py-0'>
                <hr className='border-t border-gray-300' />
              </td>
            </tr>

            <tr>
              <td className='flex items-center px-6 py-6'>
                <img
                  className='w-24 bg-cover rounded-md'
                  src={`https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080`}
                  alt=''
                />
                <div className='px-8'>Alien</div>
              </td>

              <td>8.5</td>
              <td>90%</td>
              <td>Action</td>

              <td>
                <button className='bg-red-600 text-white w-16 px-2 py-2 rounded-md'>
                  Delete
                </button>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </>
  );
}
