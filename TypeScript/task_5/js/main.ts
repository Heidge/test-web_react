interface MajorCredits {
	credits: number;
	__brand: "MajorCredits";
}

interface MinorCredits {
	credits: number;
	__brand: "MinorCredits";
}

const sumMajorCredits = (subject1: MajorCredits, subject2 : MajorCredits): MajorCredits => {
	return {
		credits: subject1.credits + subject2.credits,
		__brand: "MajorCredits"
	}
}

const sumMinorCredits = (subject1: MinorCredits, subject2 : MinorCredits): MinorCredits => {
	return {
		credits: subject1.credits + subject2.credits,
		__brand: "MinorCredits"
	}
}
