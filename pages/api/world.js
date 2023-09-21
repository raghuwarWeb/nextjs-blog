
export default function world(req, res) {

    const name = 'raghu jangid'
    const age = 24;
    const degree = 'btech'
    const prof = 'webdev'

    const raghu = {
        name, age, degree, prof
    }
  res.status(200).json({data: raghu})
}

