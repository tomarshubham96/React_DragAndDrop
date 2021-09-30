import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './App.css';
const data = [
  {'id':'0', 'cateogoory': 'Plan Information', 'idRows':[
                    {'col1':'Plan Name', 'col2': 'AARP Medicare Adventage-(HMO-POS)H1045-028-000', 'col3': 'Aetna Medicare Choice (HMO-POS)H1609-028-000', 'col4': 'BayCareplus Complete (HMO)H2235-001-000', 'col5': 'BayCarePlus Rewards-(HMO)H2235-002-000', 'col6': 'BlueMedicare Premier (HMO)H1035-034-000 '},
                    {'col1':'Parent Organization', 'col2': 'UnitedHealth Group, Inc.', 'col3': 'CVS Health Corporation', 'col4': 'Baycare Health System,Inc.', 'col5': 'Baycare Health System,Inc.', 'col6': 'Guidewell Mutual Holding Corporation'},
                    {'col1':'Contract Number', 'col2': 'H1045-028-000', 'col3': 'H1609-028-000', 'col4': 'H2235-001-000', 'col5': 'H2235-002-000', 'col6': 'H1035-034-000'},
                    {'col1':'Plan Type', 'col2': 'Local HMO', 'col3': 'Local HMO', 'col4': 'Local HMO', 'col5': 'Local HMO', 'col6': 'Local HMO'},
                    {'col1':'SNP Type', 'col2': 'Non-SNP', 'col3': 'Non-SNP', 'col4': 'Non-SNP', 'col5': 'Non-SNP', 'col6': 'Non-SNP'},
                    {'col1':'Enrollment (As of Latest Month) ', 'col2': '3,878', 'col3': '175', 'col4': '2,039', 'col5': '3,977', 'col6': '2,210'},
                    {'col1':'Enrollment Change (Jan17 to Jun21)', 'col2': '-4,785', 'col3': '175', 'col4': '2,039', 'col5': '3,977', 'col6': '2,210'},
                    {'col1':'Estimated OOPC', 'col2': '$172.30', 'col3': '$197.52', 'col4': '$130.82', 'col5': '$130.82', 'col6': '$109.35'}
                  ]},
  {'id':'1', 'cateogoory': 'Plan Indicator','idRows':[
                    {'col1':'Plan Coverage', 'col2': 'Provides Health and Drug Coverage', 'col3': 'Provides Healthand Drug Coverage', 'col4': 'Provides Health and Drug Coverage', 'col5': 'Provides Health and Drug Coverage', 'col6': 'Provides Health and Drug Coverage'},
                    {'col1':'Overall Star Ratings', 'col2': '3.5', 'col3': '4', 'col4': 'Plan too new to be measured', 'col5': 'Plan too new to be measured', 'col6': '4.5'},
                    {'col1':'No. of Counties', 'col2': '12', 'col3': '18', 'col4': '4', 'col5': '4', 'col6': '3'},
                    {'col1':'HealthWorks True Plan Value Total ', 'col2': '$227.66', 'col3': '$233.97', 'col4': '$269.16', 'col5': '$329.73', 'col6': '$280.59'},
                    {'col1':'Part C', 'col2': '$173.86', 'col3': '$173.86', 'col4': '$191.10', 'col5': '$143.70', 'col6': '$192.89'},
                    {'col1':'Part D', 'col2': '$53.80', 'col3': '$48.31', 'col4': '$78.06', 'col5': '$78.06', 'col6': '$87.71'},
                    {'col1':'Supp Benefit Value Add', 'col2': '$52.29', 'col3': '$31.80', 'col4': '$42.83', 'col5': '$20.81', 'col6': '$48.96'},
                    {'col1':'Actuarial Value 1%1', 'col2': '91.54%', 'col3': '9 1.44%', 'col4': '92.75%', 'col5': '90.68%', 'col6': '93.98%'}
                  ]},

  {'id':'2', 'cateogoory': 'Cost Information','idRows':[
                    {'col1':'Monthly Premium', 'col2': '$ 0', 'col3': '$ 0', 'col4': '$ 0', 'col5': '$ 0', 'col6': '$ 0'},
                    {'col1':'Health Premium', 'col2': '$ 0', 'col3': '$ 0', 'col4': '$ 0', 'col5': '$ 0', 'col6': '$ 0'},
                    {'col1':'Drug Premium', 'col2': '$ 0', 'col3': '$ 0', 'col4': '$ 0', 'col5': '$ 0', 'col6': '$ 0'},
                    {'col1':'Part B Reduction Amount', 'col2': '', 'col3': '', 'col4': '', 'col5': '$114.00', 'col6': ''},
                    {'col1':'Annual Drug Deductible', 'col2': '', 'col3': '$195', 'col4': '', 'col5': '', 'col6': ''},
                    {'col1':'Annual Health Deductible', 'col2': '$0', 'col3': '$500', 'col4': '$0', 'col5': '$0', 'col6': '$0'},
                    {'col1':'Is there an INN Plan Deductible? ', 'col2': 'No', 'col3': 'No', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'MC Part B INN Ded Amt charged? ', 'col2': 'No', 'col3': 'No', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'Annual Health Deductible (INN)', 'col2': '$0', 'col3': '$0', 'col4': '$0', 'col5': '$0', 'col6': '$0'},
                    {'col1':'Is there an OON Plan Deductible? ', 'col2': 'No', 'col3': 'Yes', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'MC PartB OON Ded Amt charged?', 'col2': 'No', 'col3': 'No', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'Annual Health Deductible (OON)', 'col2': '$0', 'col3': '$500', 'col4': '$0', 'col5': '$0', 'col6': '$0'},
                    {'col1':'Combined (INN & OON) Plan Ded?', 'col2': 'No', 'col3': 'No', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'MC Part B Combined Ded Amt?', 'col2': 'No', 'col3': 'No', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'Combined (INN & OON) Ded Amt', 'col2': '', 'col3': '', 'col4': '', 'col5': '', 'col6': ''},
                    {'col1':'MOOP', 'col2': '$4,900', 'col3': '$6,700', 'col4': '$3,500', 'col5': '$4,500', 'col6': '$3,400'},
                    {'col1':'Combined (INN & OON) MOOP?', 'col2': 'No', 'col3': 'Yes', 'col4': 'No', 'col5': 'No', 'col6': 'No'},
                    {'col1':'Combined MOOP Type', 'col2': '', 'col3': 'Mandatory', 'col4': '', 'col5': '', 'col6': ''},
                    {'col1':'Combined MOOP Amt', 'col2': '', 'col3': '$10,000', 'col4': '', 'col5': '', 'col6': ''},
                    {'col1':'Inpatient Hospital-Acute Authorization Required?', 'col2': 'Inpatient  Hospital-Acute:Yes', 'col3': 'Inpatient  Hospital-Acute:Yes', 'col4': 'Inpatient  Hospital-Acute:Yes', 'col5': 'Inpatient  Hospital-Acute:Yes', 'col6': 'Inpatient  Hospital-Acute:Yes'}
                  ]},

  {'id':'3', 'cateogoory': 'Item 4','idRows':[
                    {'col1':'RandomData11', 'col2': 'RandomData12', 'col3': 'RandomData13', 'col4': 'RandomData14', 'col5': 'RandomData15', 'col6': ''},
                    {'col1':'RandomData21', 'col2': 'RandomData22', 'col3': 'RandomData23', 'col4': 'RandomData24', 'col5': 'RandomData25', 'col6': ''},
                    {'col1':'RandomData31', 'col2': 'RandomData32', 'col3': 'RandomData33', 'col4': 'RandomData34', 'col5': 'RandomData35', 'col6': ''},
                    {'col1':'RandomData41', 'col2': 'RandomData42', 'col3': 'RandomData43', 'col4': 'RandomData44', 'col5': 'RandomData45', 'col6': ''},
                    {'col1':'RandomData51', 'col2': 'RandomData52', 'col3': 'RandomData53', 'col4': 'RandomData54', 'col5': 'RandomData55', 'col6': ''},
                    {'col1':'RandomData61', 'col2': 'RandomData62', 'col3': 'RandomData63', 'col4': 'RandomData64', 'col5': 'RandomData65', 'col6': ''},
                    {'col1':'RandomData71', 'col2': 'RandomData72', 'col3': 'RandomData73', 'col4': 'RandomData74', 'col5': 'RandomData75', 'col6': ''}
                  ]},

  {'id':'4', 'cateogoory': 'Item 5','idRows':[
                    {'col1':'random11', 'col2': 'random12', 'col3': 'random13', 'col4': 'random14', 'col5': 'random15', 'col6': ''},
                    {'col1':'random21', 'col2': 'random22', 'col3': 'random23', 'col4': 'random24', 'col5': 'random25', 'col6': ''},
                    {'col1':'random31', 'col2': 'random32', 'col3': 'random33', 'col4': 'random34', 'col5': 'random35', 'col6': ''},
                    {'col1':'random41', 'col2': 'random42', 'col3': 'random43', 'col4': 'random44', 'col5': 'random45', 'col6': ''}
                  ]}
]

document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('table');
  let draggingEle;
  let draggingColumnIndex;
  let placeholder;
  let list;
  let isDraggingStarted = false;

  // The current position of mouse relative to the dragging element
  let x = 0;
  let y = 0;

  // Swap two nodes
  const swap = function(nodeA, nodeB) {
      const parentA = nodeA.parentNode;
      const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

      // Move `nodeA` to before the `nodeB`
      nodeB.parentNode.insertBefore(nodeA, nodeB);

      // Move `nodeB` to before the sibling of `nodeA`
      parentA.insertBefore(nodeB, siblingA);
  };

  // Check if `nodeA` is on the left of `nodeB`
  const isOnLeft = function(nodeA, nodeB) {
      // Get the bounding rectangle of nodes
      const rectA = nodeA.getBoundingClientRect();
      const rectB = nodeB.getBoundingClientRect();

      return (rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2);
  };

  const cloneTable = function() {
      const rect = table.getBoundingClientRect();

      list = document.createElement('div');
      list.classList.add('clone-list');
      list.style.position = 'absolute';
      list.style.left = `${rect.left}px`;
      list.style.top = `${rect.top}px`;
      table.parentNode.insertBefore(list, table);

      // Hide the original table
      table.style.visibility = 'hidden';

      // Get all cells
      const originalCells = [].slice.call(table.querySelectorAll('tbody td'));

      const originalHeaderCells = [].slice.call(table.querySelectorAll('th'));
      const numColumns = originalHeaderCells.length;

      // Loop through the header cells
      originalHeaderCells.forEach(function(headerCell, headerIndex) {
          const width = parseInt(window.getComputedStyle(headerCell).width);

          // Create a new table from given row
          const item = document.createElement('div');
          item.classList.add('draggable');

          const newTable = document.createElement('table');
          newTable.setAttribute('class', 'clone-table');
          newTable.style.width = `${width}px`;

          // Header
          const th = headerCell.cloneNode(true);
          let newRow = document.createElement('tr');
          newRow.appendChild(th);
          newTable.appendChild(newRow);

          const cells = originalCells.filter(function(c, idx) {
              return (idx - headerIndex) % numColumns === 0;
          });
          cells.forEach(function(cell) {
              const newCell = cell.cloneNode(true);
              newCell.style.width = `${width}px`;
              newRow = document.createElement('tr');
              newRow.appendChild(newCell);
              newTable.appendChild(newRow);
          });

          item.appendChild(newTable);
          list.appendChild(item);
      });
  };

  const mouseDownHandler = function(e) {
    
      draggingColumnIndex = [].slice.call(table.querySelectorAll('th')).indexOf(e.target);

      if(draggingColumnIndex!==0){
      // Determine the mouse position
      x = e.clientX - e.target.offsetLeft;
      y = e.clientY - e.target.offsetTop;

      // Attach the listeners to `document`
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  }
  };

  const mouseMoveHandler = function(e) {
    
      if (!isDraggingStarted) {
          isDraggingStarted = true;

          cloneTable();
          
          draggingEle = [].slice.call(list.children)[draggingColumnIndex];
          draggingEle?.classList.add('dragging');

          // Let the placeholder take the height of dragging element
          // So the next element won't move to the left or right
          // to fill the dragging element space
          placeholder = document.createElement('div');
          placeholder.classList.add('placeholder');
          draggingEle?.parentNode.insertBefore(placeholder, draggingEle.nextSibling);
          placeholder.style.width = `${draggingEle?.offsetWidth}px`;
      }

      // Set position for dragging element
      draggingEle.style.position = 'absolute';
      draggingEle.style.top = `${draggingEle.offsetTop + e.clientY - y}px`;
      draggingEle.style.left = `${draggingEle.offsetLeft + e.clientX - x}px`;

      // Reassign the position of mouse
      x = e.clientX;
      y = e.clientY;

      // The current order
      // prevEle
      // draggingEle
      // placeholder
      // nextEle
      const prevEle = draggingEle.previousElementSibling;
      const nextEle = placeholder.nextElementSibling;
      
      // // The dragging element is above the previous element
      // // User moves the dragging element to the left
      if (prevEle && isOnLeft(draggingEle, prevEle)) {
          // The current order    -> The new order
          // prevEle              -> placeholder
          // draggingEle          -> draggingEle
          // placeholder          -> prevEle
          swap(placeholder, draggingEle);
          swap(placeholder, prevEle);
          return;
      }

      // The dragging element is below the next element
      // User moves the dragging element to the bottom
      if (nextEle && isOnLeft(nextEle, draggingEle)) {
          // The current order    -> The new order
          // draggingEle          -> nextEle
          // placeholder          -> placeholder
          // nextEle              -> draggingEle
          swap(nextEle, placeholder);
          swap(nextEle, draggingEle);
      }
  };

  const mouseUpHandler = function() {
    
    if(draggingEle!=null && placeholder.parentNode!=null){
      // // Remove the placeholder
      placeholder && placeholder.parentNode.removeChild(placeholder);
      
      
      draggingEle.classList.remove('dragging');
      draggingEle.style.removeProperty('top');
      draggingEle.style.removeProperty('left');
      draggingEle.style.removeProperty('position');

      // Get the end index
      const endColumnIndex = [].slice.call(list.children).indexOf(draggingEle);

      
      isDraggingStarted = false;

      // Remove the `list` element
      list.parentNode.removeChild(list);
      if(endColumnIndex!==0){
      // Move the dragged column to `endColumnIndex`
      table.querySelectorAll('tr').forEach(function(row) {
          const cells = [].slice.call(row.querySelectorAll('th, td'));
          draggingColumnIndex > endColumnIndex
              ? cells[endColumnIndex].parentNode.insertBefore(cells[draggingColumnIndex], cells[endColumnIndex])
              : cells[endColumnIndex].parentNode.insertBefore(cells[draggingColumnIndex], cells[endColumnIndex].nextSibling);
      });
    }
      // Bring back the table
      table.style.removeProperty('visibility');

      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    
    }
  };

  table.querySelectorAll('th').forEach(function(headerCell) {
      headerCell.classList.add('draggable');
      headerCell.addEventListener('mousedown', mouseDownHandler);
  });
});


// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: data.find(x => x.id === `${k}`)?.cateogoory,
    rows: data.find(x => x.id === `${k}`)?.idRows,
    rowSpanValue: data.find(x => x.id === `${k}`)?.idRows.length
  }));

  console.log("--------------------", getItems(5));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: '8px',
  margin: `0 0 ${grid}px 0`,
  height: '5px',
  width: '90%',
  // display: 'flex',
  // justifyContent: 'space-between',
  border: '1px solid aliceblue',
  fontSize: '11px',

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "#fff",
  padding: grid,
  height: '100%'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(5)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div style={{display: 'flex'}}>
      <div style={{width: '15%'}}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" style={{height: '100%'}}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={item.id+'-draggableItem'}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div style={{width: '85%'}}>        
                      <table style={{width: '100%'}} id="table">
                        <thead>
                          <tr style={{background: '#c7556c'}}>
                            <th className="draggable">Dimensions</th>
                            <th className="draggable"><i class="fas fa-arrows-alt"></i></th>
                            <th className="draggable"><i class="fas fa-arrows-alt"></i></th>
                            <th className="draggable"><i class="fas fa-arrows-alt"></i></th>
                            <th className="draggable"><i class="fas fa-arrows-alt"></i></th> 
                            <th className="draggable"><i class="fas fa-arrows-alt"></i></th>                           
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.items.map(item => ( 
                            item.rows.map(r => 
                              <tr className={item.id+'-trow'}>
                              <td>{r.col1}</td>
                              <td>{r.col2}</td>
                              <td>{r.col3}</td>
                              <td>{r.col4}</td>
                              <td>{r.col5}</td>
                              <td>{r.col6}</td>
                            </tr>
                            )                            
                          ))}
                        </tbody>
                      </table>
                    </div>
      </div>
    );
  }
}

export default App;
