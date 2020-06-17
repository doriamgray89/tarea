import {useRouter} from 'next/router';

export const Datos = () => {
	const router = useRouter();
	var datos = [];
	
	var q =router.query.q;
	var role =router.query.role;
	var state =router.query.state;

	if(q==undefined){
		q="";
	}

	if(role==undefined){
		role="";
	}

	if(state==undefined){
		state="";
	}

	datos['q'] = q;
	datos['role'] = role;
	datos['state'] = state;


	return datos;
}

export const Ruta = (datos) => {
    return `/?q=${datos['q']}&state=${datos['state']}&role=${datos['role']}`;
}

  export const List = () => {
    var query = Datos();

    var datos = [];
    datos = [
      {
        name: "Tareas Programadas",
        role: "5",
        avatar: "img/avatar.png",
        status: "4"
      },
      {
        name: "Jack Ma",
        role: "5",
        avatar: "img/avatar.png",
        status: "3"
      },
      {
        name: "Mark Zukember",
        role: "5",
        avatar: "img/avatar.png",
        status: "2"
      },
      {
        name: "Alain Vivó",
        role: "1",
        avatar: "img/avatar.png",
        status: "1"
      },
      {
        name: "Adis Rodríguez",
        role: "2",
        avatar: "img/avatar.png",
        status: "1"
      }
    ];

    let result = datos.filter(function(obj){
      if(obj.name.includes(query['q'])){
          return obj;
          }
        });

    let role = result.filter(function(obj){
      if(obj.role.includes(query['role'])){
          return obj;
          }
        });

    let state = role.filter(function(obj){
       if(obj.status.includes(query['state'])){
           return obj;
           }
             });
             
    return state;
  }
  
  export const Roles = () => {
    var roles = [];
    
    roles[1]={id: 1,data: "Developer"}; 
    roles[2]={id: 2, data: "Analist"};
    roles[3]={id: 3,data: "Team Analist"};
    roles[4]={id: 4,data: "Designer"};
    roles[5]={id: 5,data: "Project Owner"};

    return roles;
  }
  
  export const Status = () => {
    var status = [];
    
    status[1]={id: 1,data: "To do", color:'green'}; 
    status[2]={id: 2,data: "Work On It",color: 'blue'};
    status[3]={id: 3,data: "Testing", color: 'yellow'};
    status[4]={id: 4,data: "Done", color: 'grey'};

    return status;
  }

  export default List;