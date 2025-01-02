import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div>
            <p className="text-lg mb-4">
              Hi, I'm [Your Name]. I'm a creative developer with a passion for building beautiful, interactive web experiences. My journey in tech is complemented by my love for photography and pencil portrait sketches.
            </p>
            <p className="text-lg">
              With a background in both design and development, I bring a unique perspective to every project, blending aesthetics with functionality to create memorable digital experiences.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <ul className="space-y-4">
              <li>
                <strong>2018:</strong> Started learning web development
              </li>
              <li>
                <strong>2019:</strong> Launched my first freelance web project
              </li>
              <li>
                <strong>2020:</strong> Began exploring photography professionally
              </li>
              <li>
                <strong>2021:</strong> Started creating and selling pencil portraits
              </li>
              <li>
                <strong>2022-Present:</strong> Working as a full-stack developer while pursuing photography and art
              </li>
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-lg mb-4">
            I believe in the power of creativity to solve problems and create meaningful experiences. Whether I'm coding a website, capturing a moment through my lens, or sketching a portrait, my goal is always to create something that resonates and leaves a lasting impression.
          </p>
          <p className="text-lg">
            I'm constantly learning and evolving, always excited to take on new challenges and push the boundaries of what's possible in both the digital and artistic realms.
          </p>
        </div>
      </div>
    </div>
  )
}

