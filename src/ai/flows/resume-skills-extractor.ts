'use server';

/**
 * @fileOverview This file defines a Genkit flow to extract skills from a resume in LaTeX format.
 *
 * The flow takes a LaTeX-formatted resume as input and returns a list of extracted skills.
 * @param {string} resumeLatex - The LaTeX-formatted resume.
 * @returns {Promise<string[]>} - A promise that resolves to a string array of extracted skills.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeSkillsExtractorInputSchema = z.object({
  resumeLatex: z
    .string()
    .describe('The LaTeX-formatted resume content.'),
});
export type ResumeSkillsExtractorInput = z.infer<typeof ResumeSkillsExtractorInputSchema>;

const ResumeSkillsExtractorOutputSchema = z.array(z.string());
export type ResumeSkillsExtractorOutput = z.infer<typeof ResumeSkillsExtractorOutputSchema>;

export async function extractSkillsFromResume(
  input: ResumeSkillsExtractorInput
): Promise<ResumeSkillsExtractorOutput> {
  return resumeSkillsExtractorFlow(input);
}

const resumeSkillsExtractorPrompt = ai.definePrompt({
  name: 'resumeSkillsExtractorPrompt',
  input: {schema: ResumeSkillsExtractorInputSchema},
  output: {schema: ResumeSkillsExtractorOutputSchema},
  prompt: `You are an expert resume parser.
  Your task is to extract a list of technical skills from the following LaTeX-formatted resume.
  The skills should be returned as a simple list of strings, without any additional formatting or explanation.
  Do not include soft skills, only programming languages, frameworks, tools, and technologies.

  Resume:
  {{resumeLatex}}`,
});

const resumeSkillsExtractorFlow = ai.defineFlow(
  {
    name: 'resumeSkillsExtractorFlow',
    inputSchema: ResumeSkillsExtractorInputSchema,
    outputSchema: ResumeSkillsExtractorOutputSchema,
  },
  async input => {
    const {output} = await resumeSkillsExtractorPrompt(input);
    return output!;
  }
);
