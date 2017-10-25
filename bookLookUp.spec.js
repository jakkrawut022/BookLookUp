function Auth(amazonSevice) {
    this.amazonSevice = amazonSevice

    this.searchBookWithAmazon = (isbn) => {
        return this.amazonSevice(isbn)
    }

}

test('Search Book by ISBN with AmazonSearch', () => {
    const returnObject = {
        title: 'การบริหารห้างสรรพสินค้า',
        image: 'cp.jpeg',
        isbn: '899199929'
    }

    const mockAmazon = jest.fn('899199929')
        .mockReturnValue(returnObject)

    let app = new Auth(mockAmazon)
    let value = app.searchBookWithAmazon('899199929')

    expect(value).toEqual(returnObject)
    expect(mockAmazon).toBeCalled()
    expect(mockAmazon).toBeCalledWith('899199929')

})