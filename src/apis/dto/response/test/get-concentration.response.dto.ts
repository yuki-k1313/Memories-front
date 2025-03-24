import { ConcentrationTest } from 'src/types/interfaces';
import ResponseDto from '../response.dto';

export default interface GetConcentrationResponseDto extends ResponseDto {
	concentrationTests: ConcentrationTest[];
}