import Head from 'next/head';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-600 to-black text-white">
      <Head>
        <title>Asma Iqbal</title>
        <meta name="description" content="Portfolio of Asma Iqbal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl mb-4 font-bold">Hey, I am Asma Iqbal</h1>
        
        {/* Rainbow Gradient Text */}
        <h2 className="text-5xl mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent animate-bounce">
          I am a Front-end Developer
        </h2>
        
        <h3 className="text-5xl mb-4">Welcome to My Portfolio</h3>
        <p className="text-lg">Explore my skills and projects.</p>
      </main>

      {/* Image Container */}
      <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 mt-8 md:mt-0">
        <img
          src="/Images/Hello-Girl.gif" // Replace with your image path
          alt="Asma Iqbal"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}