import Header from "@/components/header"
import Image from "next/image"
import authorImage from "../public/assets/img/nilankar.jpg"

export default function Blogs(){
    return(
        <div>
            <Header></Header>
            <h1 className="text-green-500 text-center font-bold text-5xl pt-20 font-mono" >Blogs</h1>
            <div className="max-w-4xl  mx-auto py-12">
  <div className="flex flex-row items-start  p-4 mb-8">
    <div className=" md:w-1/2  lg:w-1/4 w-2/4 mb-6 lg:mb-0 py-4">
      <Image src={authorImage} width={75} height={75} alt="Author Image" className="rounded-full" />
    </div>
    <div className="w-full md:w-1/2 lg:w-2/3 py-6">
      <h2 className="text-2xl font-bold mb-2">Author Name</h2>
      <p className="text-gray-600 text-sm">Published on April 17, 2020</p>
    </div>
  </div>
  <div className="prose max-w-none p-4">
    <h1 className="text-3xl font-bold mb-4">The Coming Future with AI</h1>

    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold mb-4"></h2>
  <p className="mb-4">Artificial intelligence (AI) has been a buzzword for many years now, but it is becoming increasingly clear that AI is not just a passing fad – it is here to stay, and it will transform many aspects of our lives in the coming future.</p>

  <ul className="list-disc pl-4 mb-4">
    <li><strong>Enhanced Healthcare:</strong> AI has the potential to revolutionize healthcare by enabling faster and more accurate diagnoses, improving patient outcomes, and lowering costs. AI-powered systems can analyze medical data, predict diseases, and develop personalized treatment plans for patients.</li>
    <li><strong>Improved Education:</strong> AI can also be used to enhance education, by providing personalized learning experiences, automating administrative tasks, and improving accessibility for students with disabilities.</li>
    <li><strong>Safer Transportation:</strong> Self-driving cars are just the beginning of AI-powered transportation. In the future, we can expect to see AI-powered systems that improve traffic flow, reduce accidents, and enable more efficient transportation.</li>
    <li><strong>Sustainable Energy:</strong> AI can help optimize energy systems by analyzing data, predicting usage patterns, and controlling energy consumption. This can lead to more efficient and sustainable energy usage, and a reduction in greenhouse gas emissions.</li>
    <li><strong>Enhanced Customer Service:</strong> AI-powered chatbots and virtual assistants can provide 24/7 customer support, respond to inquiries faster, and reduce wait times.</li>
    <li><strong>More Efficient Business Operations:</strong> AI can be used to automate repetitive tasks, improve decision-making, and optimize business processes. This can lead to increased productivity, reduced costs, and better customer experiences.</li>
  </ul>

  <p className="mb-4">Of course, there are also concerns about the impact of AI on society, such as job displacement, bias, and privacy concerns. It is important that we approach the future with AI responsibly and ethically, and ensure that its benefits are distributed equitably.</p>

  <p className="mb-4">In conclusion, the future with AI holds incredible potential for improving our lives in many areas, from healthcare to education to transportation and beyond. As AI continues to advance, it is up to us to harness its power for good and shape the future in a positive direction.</p>
</div>


  </div>
</div>

        </div>
    )
}