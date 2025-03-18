import { Feeling, Weather } from "src/types/aliases";

// interface: patch diary request DTO //
export default interface PatchDiaryRequestDto {
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string
}