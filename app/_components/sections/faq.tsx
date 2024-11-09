import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => (
	<section className="w-full max-w-3xl mx-auto my-32 px-4">
		<h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
					<AccordionTrigger>Is it free to use?</AccordionTrigger>
					<AccordionContent>
					Yes, ByteKit is free to use.
					</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
					<AccordionTrigger>Is my data secure?</AccordionTrigger>
					<AccordionContent>
					We take data security seriously. All data processing is done client-side so the server never knows your inputs.
					</AccordionContent>
			</AccordionItem>
		</Accordion>
	</section>
);