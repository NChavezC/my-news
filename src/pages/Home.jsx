function Home() {
  return <div className="flex flex-col items-center p-6">
  <h1 className="text-2xl font-bold mb-4">Trusted News Sources</h1>
  <div className="grid grid-cols-2 gap-4">
    <div className="p-2 border rounded-lg shadow-lg">
      <img
        src="https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png"
        alt="BBC News"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-center mt-2 font-semibold">BBC News</p>
    </div>
    <div className="p-2 border rounded-lg shadow-lg">
      <img
        src="https://seeklogo.com/images/A/associated-press-logo-B9BB23D019-seeklogo.com.png"
        alt="AP News"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-center mt-2 font-semibold">AP News</p>
    </div>
    <div className="p-2 border rounded-lg shadow-lg">
      <img
        src="https://images.seeklogo.com/logo-png/3/1/cnn-logo-png_seeklogo-32699.png?v=1956130422486736360"
        alt="CNN News"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-center mt-2 font-semibold">CNN News</p>
    </div>
    <div className="p-2 border rounded-lg shadow-lg">
      <img
        src="https://seeklogo.com/images/D/deutsche-welle-logo-0967C3DB21-seeklogo.com.png"
        alt="DW News"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-center mt-2 font-semibold">DW News</p>
    </div>
  </div>
  <p className="mt-6 text-center text-lg max-w-2xl">
    These are some of the sources I read the most. In today&apos;s world, where
    misinformation spreads rapidly, it is crucial to rely on trusted news
    organizations for accurate and verified information.
  </p>
</div>;
}

export default Home;
