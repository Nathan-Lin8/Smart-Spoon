import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Smartphone, Shield, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">SmartSpoon</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Future of Dining <span className="text-primary">For The Privileged Few</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Introducing SmartSpoon — a speculative critique on how medical technology increasingly serves only those
              who can afford it. Our nanosensor-equipped utensil detects allergens in your food, but at what cost to
              society?
            </p>
            <div className="space-x-4">
              <Button className="px-8">
                Pre-order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The SmartSpoon</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A highly technical spoon that represents the growing divide between those who can afford cutting-edge
              health technology and those who cannot.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 md:col-span-2 md:row-span-2">
              <div className="flex h-[500px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Premium Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Crafted from premium materials with an elegant, minimalist aesthetic that signals exclusivity.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="SmartSpoon product image"
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Allergen Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced nanosensors detect common allergens in your food before you take a bite.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Bluetooth Connectivity</h3>
                  <p className="text-sm text-muted-foreground">
                    Connects to your smartphone for detailed allergen reports and battery monitoring.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The SmartSpoon uses cutting-edge technology to detect allergens in your food, providing a level of safety
              that remains inaccessible to many.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Scan Your Food</CardTitle>
                <CardDescription>Simply hover the SmartSpoon over your meal before eating.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Scanning food with SmartSpoon"
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Instant Analysis</CardTitle>
                <CardDescription>Nanosensors detect common allergens in milliseconds.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="SmartSpoon analyzing food"
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Step 3: Alert System</CardTitle>
                <CardDescription>Visual indicator warns you of detected allergens.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="SmartSpoon alert system"
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground italic sm:text-lg sm:leading-7">
              *While this technology could benefit millions with food allergies worldwide, our pricing structure ensures
              it remains a luxury item rather than an accessible medical necessity.
            </p>
          </div>
        </section>
        <section id="pricing" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that fits your budget — if you can afford it at all.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For casual users with minimal allergies.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold">$299</div>
                <p className="text-sm text-muted-foreground">Plus $9.99/month subscription</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Detects 5 common allergens</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic app integration</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1-year warranty</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-primary">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>For those with multiple allergies.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold">$499</div>
                <p className="text-sm text-muted-foreground">Plus $14.99/month subscription</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Detects 15 common allergens</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced app with detailed reports</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>2-year warranty</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority customer support</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Elite</CardTitle>
                <CardDescription>For those who demand the very best.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold">$999</div>
                <p className="text-sm text-muted-foreground">Plus $29.99/month subscription</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Detects 30+ allergens and toxins</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Premium app with AI recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Lifetime warranty</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 concierge support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Gold-plated finish</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground italic sm:text-lg sm:leading-7">
              *All plans require ongoing subscription for cloud processing and sensor updates. Cancellation results in
              immediate loss of allergen detection functionality.
            </p>
          </div>
        </section>
        <section id="testimonials" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Hear from our exclusive community of SmartSpoon owners.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  "As someone with severe allergies, I can finally dine out with confidence. Of course, I wish this
                  technology was accessible to everyone who needs it, not just those who can afford the luxury."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">— Alexandra, Tech Executive</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  "The SmartSpoon has been a game-changer for my son's peanut allergy. I'm grateful we can afford it,
                  but I'm troubled by the thought of families who can't access this potentially life-saving technology."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">— Michael, Investment Banker</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  "The technology is impressive, but the subscription model feels exploitative. Medical necessities
                  shouldn't be locked behind paywalls and luxury pricing. I hope future versions will be more
                  accessible."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">— Sarah, Professor of Bioethics</p>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section id="cta" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join the Privileged Few?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Pre-order your SmartSpoon today and experience the future of dining that most people can only dream of
              accessing.
            </p>
            <Button size="lg" className="px-8">
              Pre-order Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground italic sm:text-sm sm:leading-7">
              *This is a speculative design project critiquing how medical devices are often designed for privilege
              rather than accessibility. The SmartSpoon represents how life-saving technology is frequently priced out
              of reach for those who need it most.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SmartSpoon. A speculative design critique on medical technology privilege.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
