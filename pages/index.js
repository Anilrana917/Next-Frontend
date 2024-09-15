import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='header-section'>
          <h1 className='heading font-bold text-4xl my-5'>Globixo</h1>
        </div>
        <div className='banner-section'>
          <img
            src='/Assignment-Desktop-View-banner.png'
            width={1690}
            height={550}
            alt='Picture of the author'
            className='desktop-banner'
          />
          <img
            src='/Assignment-Mobile-View.png'
            alt='Picture of the author'
            className='mobile-banner'
          />
        </div>
        <div className='first-div'>
          <div className='float-section'>
            <div className='left-section'>
              <div className='left-first mx-5 p-5  bg-white rounded-lg'>
                <div className='firstcard p-5'>
                  <h1 className='my-4 text-xl font-medium'>
                    Company's Business
                  </h1>
                  <div>
                    <p className='my-5 font-medium'>Company Type</p>
                    <span>
                      <button className='cards-pills mr-3'>Export</button>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                    </span>
                  </div>
                  <div>
                    <p className='my-5 font-medium'>Company Type</p>
                    <span>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                      <button className='cards-pills mr-3'>Export</button>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                    </span>
                  </div>
                  <div>
                    <p className='my-5 font-medium'>Company Type</p>
                    <span>
                      <button className='cards-pills mr-3'>Export</button>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                      <button className='cards-pills mr-3'>
                        Contact Manufacturing
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='left-second m-5 p-5 bg-white rounded-lg'>
                <h1 className='font-medium'>Company Overview</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit inventore vel iure sunt dolorum fugit nisi repellat
                  quam architecto nulla id quaerat, qui, voluptas corporis,
                  error ipsam nemo assumenda ad corrupti fuga vero
                  exercitationem! Placeat repellendus non nulla aliquam? Aperiam
                  voluptatibus officia amet architecto? Et at explicabo id nulla
                  natus accusantium saepe a culpa, molestias repellendus nisi
                  eius, hic consequatur ratione quidem qui facilis itaque
                  voluptate enim eveniet quo ipsa dignissimos obcaecati quae.
                  Nisi odio in sunt voluptatibus pariatur quidem porro obcaecati
                  consectetur deserunt debitis eum nesciunt quam dolorum
                  asperiores eaque libero, tenetur nihil reprehenderit repellat
                  perspiciatis, cumque cum? Tempore.
                </p>

                <br />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis magni natus nulla facere iusto ratione ipsum ex
                  saepe doloribus, ad similique suscipit enim architecto error
                  minus aliquid, perferendis harum officia!
                </p>
              </div>
              <div className='left-third bg-white rounded-lg m-5 p-5'>
                <h1 className='font-bold mb-5'>Videos & Images</h1>
                <div className='img-section mb-5'>
                  <img
                    src='https://media.istockphoto.com/id/1045879660/photo/smiling-girl-beautiful-girls-karaoke-club.jpg?s=612x612&w=0&k=20&c=KKJO4M-aQyOjU0gwTVhsVcJlb5y6KvUZ9Hi3TtGPdg0='
                    className='first-img'
                  />
                  <img
                    src='https://images.pexels.com/photos/28302549/pexels-photo-28302549/free-photo-of-a-woman-in-a-brown-jacket-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    className='second-img'
                  />
                </div>
                <div className='img-section'>
                  <img
                    src='https://images.pexels.com/photos/28302549/pexels-photo-28302549/free-photo-of-a-woman-in-a-brown-jacket-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    className='second-img'
                  />
                  <img
                    src='https://media.istockphoto.com/id/1045879660/photo/smiling-girl-beautiful-girls-karaoke-club.jpg?s=612x612&w=0&k=20&c=KKJO4M-aQyOjU0gwTVhsVcJlb5y6KvUZ9Hi3TtGPdg0='
                    className='first-img'
                  />
                </div>
                <h1 className='text-violet-600 font-medium flex justify-center mt-4 underline cursor-pointer'>
                  Show All
                </h1>
              </div>
              <div className='left-fourth bg-white rounded-lg m-5 p-5'>
                <h1 className='ml-4 my-5 font-bold'>Company Type</h1>
                <div className='fourth-sec'>
                  <div className='card p-4 rounded-lg border border-slate-400'>
                    <img
                      src='https://thumbs.dreamstime.com/z/fashion-dummy-clothing-women-fashion-dummy-clothing-women-sportswear-women-store-169054867.jpg'
                      width={250}
                    />
                    <h1 className='font-medium text-center pt-3'>File Name</h1>
                  </div>
                  <div className='card p-4 rounded-lg border border-slate-400'>
                    <img
                      src='https://thumbs.dreamstime.com/z/fashion-dummy-clothing-women-fashion-dummy-clothing-women-sportswear-women-store-169054867.jpg'
                      width={250}
                    />
                    <h1 className='font-medium text-center pt-3'>File Name</h1>
                  </div>
                  <div className='card p-4 rounded-lg border border-slate-400'>
                    <img
                      src='https://thumbs.dreamstime.com/z/fashion-dummy-clothing-women-fashion-dummy-clothing-women-sportswear-women-store-169054867.jpg'
                      width={250}
                    />
                    <h1 className='font-medium text-center pt-3'>File Name</h1>
                  </div>
                </div>
                <h1 className='text-violet-600 font-medium flex justify-center mt-4 underline cursor-pointer'>
                  Show All
                </h1>
              </div>
            </div>
            <div className='right-section'>
              <div className='right-first  p-5 bg-white rounded-lg'>
                <h1 className=' text-xl font-medium mb-4'>Exibitor Contact</h1>
                <div className='details'>
                  <p className='pb-2'>
                    <span className='mr-10'>Name</span>
                    <span>Rajesh Kumar</span>
                  </p>
                  <p className='pb-2'>
                    <span className='mr-11'>Email</span>
                    <span>rajeshkumar@test.com</span>
                  </p>
                  <p className='pb-2'>
                    <span className='mr-8'>Phone</span> <span>8193842934</span>
                  </p>

                  <p className='pb-2'>
                    <span className='mr-6'>Address</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam provident, alias quo animi distinctio quaerat
                      illum at iure culpa ullam, consequuntur nisi aspernatur
                      tenetur laboriosam exercitationem. Ipsa consequatur minus.
                    </span>
                  </p>
                  <button className='rounded-lg bg-violet-600 text-white h-10 mt-8'>
                    Contact Us
                  </button>
                </div>
              </div>
              <div className='right-second mt-5 p-5 bg-white rounded-lg'>
                <h1 className=' text-xl font-medium mb-4'>Zaloni Exibition</h1>
                <div className='details'>
                  <div className='pb-6 flex items-center'>
                    <img
                      src='https://static-00.iconduck.com/assets.00/wifi-round-icon-512x512-xx8m8qol.png'
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium'>Saudi Food Expo</p>
                      <p>12 July - 18 July 2024</p>
                    </span>
                  </div>
                  <div className='pb-7 flex items-center'>
                    <img
                      src='https://static-00.iconduck.com/assets.00/wifi-round-icon-512x512-xx8m8qol.png'
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium'>Saudi Food Expo</p>
                      <p>12 July - 18 July 2024</p>
                    </span>
                  </div>
                  <div className='pb-2 flex items-center'>
                    <img
                      src='https://static-00.iconduck.com/assets.00/wifi-round-icon-512x512-xx8m8qol.png'
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium'>Saudi Food Expo</p>
                      <p>12 July - 18 July 2024</p>
                    </span>
                  </div>
                  <h1 className='text-violet-600 font-medium flex justify-center mt-4 underline cursor-pointer'>
                    Show All
                  </h1>
                </div>
              </div>
              <div className='right-third mt-5 p-5 bg-white rounded-lg '>
                <h1 className=' text-xl font-medium mb-5'>Members</h1>
                <div className='details'>
                  <div className='py-2 mb-5 flex items-center rounded-lg border border-slate-400'>
                    <img
                      src='https://media.gettyimages.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=gi&k=20&c=tC514mTG014_uspJnEeJeKrQDiBY2N9GFYKPqwmtBuo='
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium text-lg'>Saudi Food Expo</p>
                      <p className='text-sm'>Markering Expert</p>
                    </span>
                  </div>
                  <div className='py-2 mb-5 flex items-center rounded-lg border border-slate-400'>
                    <img
                      src='https://media.gettyimages.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=gi&k=20&c=tC514mTG014_uspJnEeJeKrQDiBY2N9GFYKPqwmtBuo='
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium text-lg'>Saudi Food Expo</p>
                      <p className='text-sm'>Markering Expert</p>
                    </span>
                  </div>
                  <div className='py-2 mb-5 flex items-center rounded-lg border border-slate-400'>
                    <img
                      src='https://media.gettyimages.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=gi&k=20&c=tC514mTG014_uspJnEeJeKrQDiBY2N9GFYKPqwmtBuo='
                      width={60}
                      className='mr-10'
                    />
                    <span>
                      <p className='font-medium text-lg'>Saudi Food Expo</p>
                      <p className='text-sm'>Markering Expert</p>
                    </span>
                  </div>
                  <h1 className='text-violet-600 font-medium flex justify-center mt-4 underline cursor-pointer'>
                    Show All
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='footer h-16 bg-blue-950 flex items-center justify-center text-white'>
            All Rights Reserved.
          </div>
        </footer>
      </main>

      <style jsx global>{`
        .desktop-banner {
          display: block;
        }
        .mobile-banner {
          display: none;
        }

        .left-second h1 {
          margin-bottom: 1rem;
        }
        .fourth-sec {
          display: flex;
          justify-content: space-around;
        }
        .first-img {
          width: 70%;
        }
        .second-img {
          width: 30%;
        }
        .img-section {
          display: flex;
          gap: 20px;
        }
        .left-section {
          width: 70%;
        }
        .right-section {
          width: 30%;
        }
        .float-section {
          display: flex;
          padding: 0 8rem;
          position: relative;
          top: -40px;
        }
        .first-div {
          background-color: #c7d1da;
        }
        .cards-pills {
          padding: 5px 20px;
          border-radius: 16px;
          border: 1px solid;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 17px 0 rgba(0, 0, 0, 0.19);
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .details button {
          width: 100%;
        }
        .header-section h1 {
          border-bottom: 1px solid #8400ff;
          color: #8400ff;
          margin: 20px 0 0 0;
          padding: 0 0 20px 9rem;
        }
        .Home_container__d256j {
          min-height: auto !important;
          padding: 0 !important;
        }
        .banner-section img {
          width: 100% !important;
        }
        .footer {
          background-color: rgb(6 15 43);
        }
          
        @media (max-width: 768px) {
          .desktop-banner {
            display: none;
          }
          .mobile-banner {
            display: block;
          }
          .header-section h1 {
            color: #8400ff;
            font-size: 26px;
            padding: 11px 12px;
            margin: 0;
          }

          .float-section {
            padding: 0 0rem;
            position: unset;
            flex-direction: column-reverse;
          }
          .left-section {
            width: 100%;
            margin-top: 0.7rem;
          }
          .left-first {
            padding: 0;
          }
          .firstcard h1 {
            margin: 0;
          }
          .right-section {
            width: 100%;
          }
          .details button {
            display: none;
          }
          .right-first {
            height: auto;
            border-radius: 0;
          }
          .left-fourth h1 {
            margin-top: 0;
            margin-left: 0;
          }
          .right-second {
            border-radius: 0;
            margin-top: 0.8rem;
          }
          .right-third {
            border-radius: 0;
            margin-top: 0.8rem;
          }
          .cards-pills {
            margin: 10px 5px;
          }
          .firstcard p {
            margin: 10px 0;
          }
          .left-second h1 {
            margin-bottom: 10px;
          }
          .img-section {
            flex-wrap: wrap;
          }
          .first-img {
            width: 100%;
          }
          .second-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .left-first {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
          }
          .left-second {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
            margin-bottom: 0rem;
            margin-top: 0.8rem;
          }
          .left-third {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
            margin-top: 0.8rem;
          }
          .left-fourth {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
            margin-top: 0.8rem;
          }
          .fourth-sec .card {
            width: 100%;
            margin-bottom: 1rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 17px 0 rgba(0, 0, 0, 0.19);
          }
          .fourth-sec img {
            width: 100%;
          }
          .fourth-sec {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
