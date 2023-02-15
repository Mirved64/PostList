import Card from '../Card/card';

function CardList({goods, onProductLike, currentUser}) {
  return (

    <div>
      <div className='cards'>
			{
				goods.map( (item, index) => <Card key={item._id} {...item} onProductLike={onProductLike} currentUser={currentUser}/>)
			}
		</div>
    </div>
  );
}

export default CardList;